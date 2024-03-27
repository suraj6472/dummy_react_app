<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\TopicController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/auth/register', [AuthController::class, 'createUser']);
Route::post('/auth/login', [AuthController::class, 'loginUser']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::get('/topics', [TopicController::class, 'index']);
    Route::post('/topics', [TopicController::class, 'store']);

    Route::get('/questions', [QuestionController::class,'index']);
    Route::post('/questions', [QuestionController::class,'store']);

    Route::post('finish-test', [TestController::class,'finishTest']);
    Route::post('filter-questions', [TestController::class,'filterQuestion']);
    Route::post('get-test-questions', [TestController::class,'getTestQuestions']);
    Route::post('view-attempted-test/{test_id}', [TestController::class,'viewAttemptedTest']);

    Route::get('tests', [TestController::class,'tests']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
