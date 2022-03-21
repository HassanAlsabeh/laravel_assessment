<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\UserController;
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
Route::post('/register', [UserController::class,'register']);
Route::post('/login', [UserController::class,'login']);
//Route::post('/logout', ['UserController', 'logout']);
Route::resource('users', UserController::class);
Route::resource('employees', EmployeeController::class);
Route::resource('companies', CompanyController::class);
//Route::group(['middleware' => ['jwt.verify']], function() {
//    Route::get('/tasks', ['TaskController', 'index']);
//});
