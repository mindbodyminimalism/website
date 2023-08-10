<?php

use App\Http\Controllers\UserInfoUpdate;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;

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

Route::get('/essence_pages/essence', function () {
    return view('essence_pages.essence');
});

Route::get('/body_pages/fitnesscalculator', function () {
    return view('body_pages.fitnesscalculator');
});

Route::get('/body_pages/eat', function () {
    return view('body_pages.eat');
});

Route::get('/body_pages/exercise', function () {
    return view('body_pages.exercise');
});

Route::get('/body_pages/sleep', function () {
    return view('body_pages.sleep');
});

Route::get('/mind_pages/learn', function () {
    return view('mind_pages.learn');
});

Route::get('/mind_pages/create', function () {
    return view('mind_pages.create');
});

Route::get('/mind_pages/meditate', function () {
    return view('mind_pages.meditate');
});

Route::get('/essence_pages/express', function () {
    return view('essence_pages.express');
});

Route::get('/essence_pages/listen', function () {
    return view('essence_pages.listen');
});

Route::get('/essence_pages/contemplate', function () {
    return view('essence_pages.contemplate');
});

Route::get('/essence_pages/mood_tracker', function () {
    return view('essence_pages.mood_tracker');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('/update-user-info', 'App\Http\Controllers\UserInfoUpdate@update');

