<?php

namespace App\Http\Controllers;

//use Illuminate\Http\Request;

use Validator;

use App\Http\Requests;
use Request;
use App\Http\Controllers\Controller;

class documentContoller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return view("document.index");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function upload(Request $request)
    {
      //dd($request->files);
         $files = Request::file();
          $names = [];
          $file_count = count($files);
          $uploadcount = 0;

          foreach ($files as $file)
          {
               $rules = array('file' => 'required'); //'required|mimes:png,gif,jpeg,txt,pdf,doc'
               $validator = Validator::make(array('file'=> $file), $rules);
                 if($validator->passes())
                 {
                      $destinationPath = 'uploads';
                      $filename = $file->getClientOriginalName();
                      $upload_success = $file->move($destinationPath, $filename);
                      $uploadcount ++;
                  }
          }

         if($uploadcount == $file_count)
            {
               \Session::flash('success', 'Upload successfully');
               //return Redirect::to('upload');
            }
            else
            {
               //return Redirect::to('upload')->withInput()->withErrors($validator);
            }
   }
}
