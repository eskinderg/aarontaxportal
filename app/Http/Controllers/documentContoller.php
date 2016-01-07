<?php

namespace App\Http\Controllers;

//use Illuminate\Http\Request;

use Validator;

use App\Http\Requests;
use Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Document;

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

   public function listdocs()
   {
      $currentUser = null;
        if (Auth::check())
          {
              $currentUser = Auth::user();
          }
       //$messages = \Social\User::find($currentUser->id)->messages;
      return view('document.list')->with('currentUser',$currentUser);
   }

   public function delete($id)
   {
      Auth::user()->documents()->find($id)->delete();
      return redirect('document/listdocs');
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

                      $doc = new Document();
                      $doc->filename = $filename;
                      //$doc->user()=Auth::User();
                      Auth::User()->documents()->save($doc);
                      //$doc->save();

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
