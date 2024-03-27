<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    public function index()
    {
        $topics = Topic::select('id', 'name')->get(10);

        return response()->json([
            'status' => 'success',
            'data' => $topics
        ]);
    }

    public function store(Request $request)
    {
        $topic = Topic::create([
            'name' => $request->name,
        ]);

        if ($topic) {
            return response()->json([
                'status' => "success",
                'data' => $topic
            ], 201);
        }
    }
}
