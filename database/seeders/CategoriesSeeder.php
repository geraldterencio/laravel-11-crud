<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Category;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Category::create([
        	'name' 		     => 'SYSTEM SETTINGS',
        	'group_id'	     => 100,
        	'icon'		     => 'bi bi-wrench',
        	'url' 	         => '/app/system-settings/',
            'route_name'     => '/system-settings'
        ]);
    }
}
