<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Submodule;

class SubmodulesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
		Submodule::create([
        	'name' 			=> 'VAT',
        	'module_id'		=> 102,
        	'icon'			=> 'bi bi-wrench',
        	'url'   		=> '/app/system-settings/vats/',
            'route_name'    => 'vats.index'
        ]);

        Submodule::create([
            'name'          => 'WHT',
            'module_id'   	=> 102,
            'icon'          => 'bi bi-wrench',
            'url'           => '/app/system-settings/whts/',
            'route_name'    => 'whts.index'
        ]);
    }
}
