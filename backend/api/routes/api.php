<?php

use App\Http\Controllers\Api\AnimalController;
use App\Http\Controllers\Api\LocationController;
use App\Http\Controllers\Api\PlantController;
use App\Http\Controllers\Api\RatingController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(UserController::class)->group(function () {
    Route::get('/users', 'index');
    Route::post('/user', 'store');
    Route::get('/user/{id}', 'show');
    Route::put('/user/{id}', 'update');
    Route::delete('/user/{id}', 'destroy');
});

Route::controller(PlantController::class)->group(function () {
    Route::get('/plants', 'index');
    Route::post('/plant', 'store');
    Route::get('/plant/{id}', 'show');
    Route::put('/plant/{id}', 'update');
    Route::delete('/plant/{id}', 'destroy');
});

Route::controller(AnimalController::class)->group(function () {
    Route::get('/animals', 'index');
    Route::post('/animal', 'store');
    Route::get('/animal/{id}', 'show');
    Route::put('/animal/{id}', 'update');
    Route::delete('/animal/{id}', 'destroy');
});

Route::controller(LocationController::class)->group(function () {
    Route::get('/locations', 'index');
    Route::post('/location', 'store');
    Route::get('/location/{id}', 'show');
    Route::put('/location/{id}', 'update');
    Route::delete('/location/{id}', 'destroy');
});

Route::controller(RatingController::class)->group(function () {
    Route::get('/ratings', 'index');
    Route::post('/rating', 'store');
    Route::get('/rating/{id}', 'show');
    Route::put('/rating/{id}', 'update');
    Route::delete('/rating/{id}', 'destroy');
});



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
