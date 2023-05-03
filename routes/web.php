<?php

use App\Http\Controllers\UserInfoUpdate;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/body', function () {
    return view('body');
});

Route::get('/mind', function () {
    return view('mind');
});

Route::get('/fitnesscalculator', function () {
    return view('fitnesscalculator');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('/update-user-info', 'App\Http\Controllers\UserInfoUpdate@update');

