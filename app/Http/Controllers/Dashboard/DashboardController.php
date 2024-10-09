<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Models\Category;

class DashboardController extends Controller
{
    //
    public function index()
    {
    	$categories 		= Category::get();
    	return view('dashboard',compact('categories'));
    }
}
