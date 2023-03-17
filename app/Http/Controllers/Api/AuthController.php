<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\User;
use Auth;
// password
class AuthController extends Controller
{
    public function register(Request $request) {
        $validator = Validator::make($request->form, [
            "name" => "required",
            "email" => "required|email",
            "password" => "required",
            "c_password" => "required|same:password",
        ]);

        if($validator->fails()) {
            return response()->json([
                "success" => false,
                "message" => $validator->errors()
            ], 400);
        }

        $input = $request->form;
        $input["password"] = bcrypt($input["password"]);
        $user = User::create($input);

        $success["token"] = $user->createToken("MyApp")->plainTextToken;
        $success["name"] = $user->name;

        return response()->json([
            "success" => true,
            "message" => "User registered successfully.",
            "data" => $success
        ], 201);
    }

    public function login(Request $request) {
        if(Auth::attempt(["email" => $request->form["email"], "password" => $request->form["password"]])) {
            $user = Auth::user();
            $success["token"] = $user->createToken("MyApp")->plainTextToken;
            $success["name"] = $user->name;

            return response()->json([
                "success" => true,
                "message" => "User logged in successfully.",
                "data" => $success
            ], 200);
        } else {
            return response()->json([
                "success" => false,
                "message" => "Unauthorized, User cannot be logged in."
            ]);
        }
    }
}
