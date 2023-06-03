<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;


class AuthController extends Controller
{

    public function login(LoginRequest $request)
    {
        dump($request);
        // try {
        //     if (true) {
        //         /** @var User $user */
        //         $user = Auth::user();
        //         $token = $user->createToken('API Token')->accessToken;

        //         // if (config('auth.must_verify_email') && !$user->hasVerifiedEmail()) {
        //         //     return response([
        //         //         'message' => 'Email must be verified.'
        //         //     ], 401);
        //         // }

        //         return response([
        //             'message' => 'success',
        //             'token' => $token,
        //             'user' => $user
        //         ]);
        //     }
        // } catch (\Exception $e) {
        //     return response([
        //         'message' => 'Internal error, please try again later.' //$e->getMessage()
        //     ], 400);
        // }sdf
        echo "gagaga";
        return response([
            'message' => 'Invaasdfds password.'
        ], 401);
    }

    public function user()
    {
        return response()->json(Auth::user());
    }
}
