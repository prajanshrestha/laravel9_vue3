<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tasks;
use Illuminate\Support\Carbon;

class ToDoListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $tasks = Tasks::orderBy('created_at', 'desc')->get();

        return response()->json([
            'tasks' => $tasks
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newTask = new Tasks;
        $newTask->tasks = $request->task_name;
        $newTask->save();

        return response()->json([
            'newTask' => $newTask
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $existingTask = Tasks::find($id);

        if($existingTask) {
            $existingTask->completed = $request->task['completed'] ? true : false;
            $existingTask->updated_at = Carbon::now();
            $existingTask->save();

            return response()->json([
                'existingTask' => $existingTask
            ]);
        } else {
            return response()->json([
                'existingTask' => 'Task not found.'
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task = Tasks::find($id);

        if($task) {
            $task->delete();

            return response()->json([
                'task' => 'Task deleted.'
            ]);
        } else {
            return response()->json([
                'task' => 'Task not found.'
            ]);
        }
    }
}
