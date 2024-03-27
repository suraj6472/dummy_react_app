<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestController extends Controller
{
    public function filterQuestion()
    {
        $no_of_questions = request()->questions ?: 0;

        if (!$no_of_questions) {
            return response()->json([
                'status' => 'failure',
                'error' => 'No of questions not mentioned'
            ]);
        }
        $questions = Question::query();

        if (request()->topic_id) {
            $questions->where('topic_id', request()->topic_id);
        }

        if (request()->difficulty) {
            $questions->where('difficulty', request()->difficulty);
        }

        $questions = $questions->limit($no_of_questions)->get();


        if ($questions->count() == $no_of_questions) {
            $test = Test::updateOrCreate([
                'user_id' => auth()->id(),
                'topic_id' => request()->topic_id,
                'difficulty' => request()->difficulty,
                'is_attempted' => '0'
            ], [
                'questions' => request()->questions
            ]);

            $test->questions()->sync($questions->pluck('id')->toArray());

            return response()->json([
                'status' => 'success',
                'data' => [
                    'test_id' => $test->id
                ]
            ]);
        }

        return response()->json([
            'status' => 'failure',
            'error' => 'too less questions found'
        ]);
    }
    public function getTestQuestions(Request $request)
    {
        $questions = Test::where('id', $request->test_id)
            ->with('questions:id,details,answer_option,topic_id,a,b,c,d,difficulty')
            ->first();

        return response()->json([
            'status' => 'success',
            'data' => $questions
        ]);
    }
    public function finishTest(Request $request)
    {
        // return $request->all();
        $validateUser = Validator::make(
            $request->all(),
            [
                'test_id' => ['required', 'exists:tests,id'],
            ]
        );

        if ($validateUser->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validateUser->errors()
            ], 401);
        }

        $test = Test::find($request->test_id);

        foreach ($request->answers as $answer) {
            $test->questions()->updateExistingPivot($answer['question_id'], ['user_answer' => $answer['option']]);
        }

        $test->update(['is_attempted' => 1]);

        return response()->json([
            'status' => 'success',
            'data' => [
                'test_id' => $test->id
            ]
        ]);
    }
    public function viewAttemptedTest($test_id)
    {
        $test = Test::where('id', $test_id)->with('questions')->first();
        return response()->json([
            'status' => 'success',
            'data' => $test
        ]);
    }

    public function tests()
    {
        $test = Test::where(['user_id' => auth()->id(), 'is_attempted' => 1])->with('questions', 'topic')->get();
        return response()->json([
            'status' => 'success',
            'data' => $test
        ]);
    }
}
