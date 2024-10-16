<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Submodule extends Model
{
    use HasFactory;

    protected $fillable = [
        'module_id',
        'name',
        'icon',
        'url',
        'route',
    ];
}
