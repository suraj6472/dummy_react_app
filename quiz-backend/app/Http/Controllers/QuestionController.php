<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuestionController extends Controller
{
    public function index()
    {
        $questions = Question::with('topic')->get();
        return response()->json([
            'status' => 'success',
            'data' => $questions
        ]);
    }

    public function store(Request $request)
    {
        $validateUser = Validator::make($request->all(),
        [
            'details' => ['required'],
            'answer_option' => ['required', 'in:a,b,c,d'],
            'topic_id' => ['required', 'exists:topics,id'],
            'a' => ['required'],
            'b' => ['required'],
            'c' => ['required'],
            'd' => ['required'],
            'difficulty' => ['required', 'in:easy,medium,hard'],
        ]);

        if($validateUser->fails()){
            return response()->json([
                'status' => false,
                'errors' => $validateUser->errors()
            ], 401);
        }
        $question = Question::create([
            'details' => $request->input('details'),
            'answer_option' => $request->input('answer_option'),
            'topic_id' => $request->input('topic_id'),
            'a' => $request->input('a'),
            'b' => $request->input('b'),
            'c' => $request->input('c'),
            'd' => $request->input('d'),
            'difficulty' => $request->input('difficulty'),
        ]);
        return response()->json([
            'status' => 'success',
            'data' => $question
        ], 201);

    }
}
