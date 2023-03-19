<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ToDoListController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// register and login
Route::controller(AuthController::class)->group(function() {
    Route::post("/register", "register");
    Route::post("/login", "login");
});

// todo list
Route::get('/toDoLists', [ToDoListController::class, 'index']);
Route::prefix('/task')->group(function(){
    Route::post('/store',[ToDoListController::class, 'store']);
    Route::put('/{id}' , [ToDoListController::class, 'update']);
    Route::delete('/{id}', [ToDoListController::class, 'destroy'] );
});
