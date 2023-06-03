<?php

use App\Models\Ancestor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;
use App\Http\Controllers\Web;
use Illuminate\Support\Facades\Storage;

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

Route::post('login', [Api\AuthController::class, 'login']);
Route::post('register', [Api\RegisterController::class, 'register']);
Route::post('forgot', [Api\ForgotController::class, 'forgot']);
Route::post('reset', [Api\ForgotController::class, 'reset']);
Route::get('email/resend/{user}', [Api\VerifyController::class, 'resend'])->name('verification.resend');
Route::get('email/verify/{id}', [Api\VerifyController::class, 'verify'])->name('verification.verify');; // Make sure to keep this as your route name

// Ancestor
Route::get('ancestors/tree', [Web\AncestorController::class,'getAncestors']);

// Options
Route::get('/ancestors/options', function (Request $request) {
    $ancestors = Ancestor::where('direct', 1)->get();

    $response = $ancestors->map(function ($ancestor) {
        return [
            'name' => $ancestor->name,
            'id' => $ancestor->id
        ];
    });

    return response()->json($response);
});

// CRUD
Route::get('/ancestors/{id}', [Web\AncestorController::class, 'show']);
Route::post('/ancestors/plus', [Web\AncestorController::class, 'store']);
Route::put('/ancestors/update/{id}', [Web\AncestorController::class, 'update']);

Route::delete('/ancestors/{id}', [Web\AncestorController::class, 'undo']);

// UPLOAD IMAGE

Route::post('/upload', function (Request $request) {
    // Validate the uploaded file

    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $imagePath = $image->store('images', 'public'); // Store the image in the storage/app/public/images directory

        return response()->json(['imagePath' => Storage::url($imagePath)]);
    }

    return response()->json(['error' => 'Image upload failed.'], 400);
});

// ALBUMS
Route::get('/albums', [Web\AlbumController::class, 'index']);
Route::get('/albums/{id}', [Web\AlbumController::class, 'show']);
Route::post('/albums',[Web\AlbumController::class, 'store']);
Route::put('/albums/{id}', [Web\AlbumController::class, 'update']);
Route::delete('/albums/{id}',[Web\AlbumController::class, 'destroy']);
Route::post('/albums/{id}/images', [Web\ImageController::class, 'store']);

// IMAGE
Route::delete('/images/{id}', [Web\ImageController::class, 'destroy']);
Route::delete('/images', [Web\ImageController::class, 'destroyMultiple']);

// MIDDLEWARE

Route::group(['middleware' => ['auth:api']], function () {
    // Route::get('user', [Api\AuthController::class, 'user']);
});
