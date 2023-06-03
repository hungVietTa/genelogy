<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $guarded = ['id'];

    public function images()
    {
        return $this->hasMany(Image::class);
    }

    public static function boot()
    {
        parent::boot();

        // Define the deleting event
        static::deleting(function ($album) {
            // Delete the associated images
            $album->images()->delete();
        });
    }

    use HasFactory;
}
