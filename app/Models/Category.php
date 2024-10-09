<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'group_id',
        'icon',
        'url',
        'route',
    ];

    // public function module(){
    //     return $this->belongsTo(Module::class,'category_id');
    // }

    public function modules(){
        return $this->hasMany(Module::class,'category_id');
    }


}
