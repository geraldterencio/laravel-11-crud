<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'name',
        'icon',
        'url',
        'route',
    ];

    public function submodules(){
        return $this->hasMany(Submodule::class,'module_id');
    }
}
