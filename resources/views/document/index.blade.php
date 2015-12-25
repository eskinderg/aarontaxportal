@extends('layout.master')

@section('title','Documents')


@section('content')
   <h2>My Documents Page </h2>
   <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
         <ul class="nav navbar-nav" style="color:black ! important;">

            <li>
              <a href="#/create">
                  <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  New
              </a>

            </li>

               <li class="">
                 <a href="#/Page1">
                     <span class="glyphicon glyphicon-book" aria-hidden="true"></span>
                     Page1
                 </a>
               </li>


               <li>
                 <a href="#/Page2">
                     <span class="glyphicon glyphicon-book" aria-hidden="true"></span>
                     Page2
                 </a>

               </li>

               <li>
                 <a href="#/Page3">
                     <span class="glyphicon glyphicon-book" aria-hidden="true"></span>
                     Page3
                 </a>

               </li>


               <li>
                 <a href="#/Authors">
                     <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                     Authors
                 </a>

               </li>

         </ul>
    </div>
@endsection
