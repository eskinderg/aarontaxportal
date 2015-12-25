<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('Home');
});



Route::get('home',['as'=>'home','uses'=>'home@index']);


/* Authentication namespace */
Route::group(['prefix'=>'auth','namespace'=>'Auth'],function(){
    // Authentication routes...
    Route::get('login',['as'=>'auth.login','uses'=>'AuthController@getLogin']);
    Route::post('login', 'AuthController@postLogin');
    Route::get('logout',['as'=>'auth.logout','uses'=>'AuthController@getLogout']);
    // Registration routes...
    Route::get('register', ['as'=>'auth.register','uses'=>'AuthController@getRegister']);
    Route::post('register', 'AuthController@postRegister');
});
