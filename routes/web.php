<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\SystemSettings\Users\UserController;

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashobard', [DashboardController::class,'index'])->name('dashboard');
// Route::middleware('auth')->group(function () {
// });

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    /* ======================= LISTS ======================= */
    Route::get('/app/system-settings/users', [UserController::class, 'index'])->name('users.index');
    /* ======================= CREATE ======================= */
    Route::post('/app/system-settings/users/create', [UserController::class, 'store'])->name('users.create');
    /* ======================= CHECK EMAIL VALIDATION ======================= */
    Route::post('/app/system-settings/users/checkEmailExists', [UserController::class, 'checkEmailExists']);
    /* ======================= VIEW ======================= */
    Route::post('/app/system-settings/users/viewDetails', [UserController::class, 'show'])->name('users.show');
    /* ======================= EDIT ======================= */
    Route::post('/app/system-settings/users/editDetails', [UserController::class, 'edit'])->name('users.edit');
    /* ======================= UPDATE ======================= */
    Route::post('/app/system-settings/users/updateDetails', [UserController::class, 'update'])->name('users.update');
    /* ======================= EXPORT CSV ======================= */
    Route::get('/app/system-settings/users/exportCSV',[UserController::class, 'exportCSV'])->name('users.export-csv');
});

Route::middleware('auth')->group(function () {
    Route::get('/app/system-settings/vats', [ProfileController::class, 'edit'])->name('vats.index');
    Route::get('/app/system-settings/whts', [ProfileController::class, 'edit'])->name('whts.index');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
