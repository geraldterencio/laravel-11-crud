<?php

namespace App\Http\Controllers\SystemSettings\Users;

use App\Http\Controllers\Controller;

use App\Models\User;
use App\Models\Category;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

use DataTables;
use Excel;

use App\Http\Controllers\SystemSettings\Users\Exports\ExportCSVController;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $categories         = Category::get();
        if($request->ajax()){
            $users          = User::query();

            return DataTables::of($users)->addIndexColumn()->make(true);
        }
        return view('system-settings.users.index',compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    } 

    public function checkEmailExists(Request $request)
    {
        $data                   = $request->all();
        return User::where('email',$data['email'])->count();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $result = DB::transaction(function(&$data) use ($request) {
            $data                   = $request->all();
            $user = User::create([
                'name'                  => $data['name'],
                'email'                 => $data['email'],
                'password'              => Hash::make($data['password'])
            ]);
         
            return $user;
        });

        return $result;
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
        $data                       = $request->all();

        $user                       = User::where('id',$data['id'])->first();


        $returnHTML = view('system-settings.users.ajax.view-details',compact('user'))->render();
        // echo $returnHTML;
        $returnJson = Response()->json($user->name);        
        return array('name' => $returnJson, 'page' => $returnHTML);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        //
        $data                       = $request->all();

        $user                       = User::where('id',$data['id'])->first();


        $returnHTML = view('system-settings.users.ajax.update-details',compact('user'))->render();
        // echo $returnHTML;
        $returnJson = Response()->json($user->name);        
        return array('name' => $returnJson, 'page' => $returnHTML);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        $data                       = $request->all();

        User::where('id',$data['id'])->update([
            'name'                  => $data['name'],
            'email'                 => $data['email'],
        ]);

        $user                       = User::where('id',$data['id'])->first();


        $returnHTML = view('system-settings.users.ajax.view-details',compact('user'))->render();
        // echo $returnHTML;
        $returnJson = Response()->json($user->name);        
        return array('name' => $returnJson, 'page' => $returnHTML);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }

    public function exportCSV()
    {
        return (new ExportCSVController())->download('users.csv');
    }
}
