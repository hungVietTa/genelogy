<?php

namespace App\Http\Controllers\Web;

use Intervention\Image\Facades\Image as InterventionImage;
use App\Models\Album;
use App\Models\Image;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
{
    $album = Album::findOrFail($id);

    $images = [];

    foreach ($request->file('images') as $imageFile) {
        // Generate a unique filename for the image
        $filename = uniqid() . '.' . $imageFile->getClientOriginalExtension();

        // Compress the original image with lower quality
        $compressedImage = InterventionImage::make($imageFile)->encode('jpg', 80);
        $compressedPath = 'public/images/compressed/' . $filename;
        Storage::put($compressedPath, $compressedImage);

        // Create a new CustomImage model instance and associate it with the album
        $image = new Image(['path' => Storage::url($compressedPath)]);
        $images[] = $album->images()->save($image);
    }

    return response()->json(['message' => 'Images uploaded successfully', 'images' => $images], 201);
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $image = Image::findOrFail($id);

    // Delete the image file from storage
    Storage::delete($image->path);

    // Delete the image record from the database
    $image->delete();

    return response()->json(['message' => 'Image deleted successfully'], 200);
    }

    public function destroyMultiple(Request $request)
{
    dump($request->input);
    $imageIds = $request->input('image_ids');

    // Find the images by IDs
    $images = Image::whereIn('id', $imageIds)->get();

    // Loop through the images and delete them
    foreach ($images as $image) {
        // Delete the image file from storage
        Storage::delete($image->path);

        // Delete the image record from the database
        $image->delete();
    }

    return response()->json(['message' => 'Images deleted successfully'], 200);
}
}
