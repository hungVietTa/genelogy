<?php

namespace App\Http\Controllers\Web;

use App\Models\Album;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;

class AlbumController extends Controller
{
    public function index()
    {
        $albums = Album::with('images')->get();

        $albums->each(function ($album) {
            $album->images->each(function ($image) {
                $image->url = asset($image->path);
            });
        });

        return response()->json(['albums' => $albums]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $album = Album::create($validatedData);

        return response()->json(['message' => 'Album created successfully', 'album' => $album], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $album = Album::with('images')->findOrFail($id);

        $album->images->each(function ($image) {
            $image->url = asset($image->path);
        });

        return response()->json(['album' => $album]);
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
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $album = Album::findOrFail($id);
        $album->update($validatedData);

        return response()->json(['message' => 'Album updated successfully', 'album' => $album]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $album = Album::findOrFail($id);
        $album->delete();

        return response()->json(['message' => 'Album deleted successfully']);
    }
}
