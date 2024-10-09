<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Module;


class ModulesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
		Module::create([
        	'id' 			=> 101,
        	'name' 			=> 'Users',
        	'category_id'	=> 1,
        	'icon'			=> 'bi bi-wrench',
        	'url' 		    => '/app/system-settings/users/',
            'route_name'    => 'users.index'
        ]);

        Module::create([
            'id'            => 102,
            'name'          => 'Taxes',
            'category_id'   => 1,
            'icon'          => 'bi bi-wrench',
            'url'           => '/app/system-settings/taxes/',
            'route_name'    => 'taxes.index'
        ]);
    }
}
