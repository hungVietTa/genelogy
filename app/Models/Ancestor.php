<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ancestor extends Model
{
    protected $guarded = ['id'];

    protected static function boot()
    {
        parent::boot();

        static::saving(function ($ancestor) {
            if ($ancestor->parent_id) {
                $ancestor->direct = true;
            }
            // Update parent_in_law_id if parent_id is null
            elseif (!$ancestor->parent_id && $ancestor->spouse_id) {
            $spouse = self::find($ancestor->spouse_id);
            if ($spouse) {
                $ancestor->parent_in_law_id = $spouse->parent_id;
            }
        }

        });
    }

    public function spouse()
    {
        return $this->hasOne(Ancestor::class, 'id', 'spouse_id');
    }

    public function children()
    {
        return $this->hasMany(Ancestor::class, 'parent_id', 'id');
    }

    public function spouses()
        {
    return $this->hasMany(Ancestor::class, 'spouse_id');
        }

        public function images()
{
    return $this->hasMany(Image::class);
}

    use HasFactory;
}
