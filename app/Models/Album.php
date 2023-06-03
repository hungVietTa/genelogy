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

    use HasFactory;
}
