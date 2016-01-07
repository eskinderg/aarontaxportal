
@extends('layout.master')

@section('title','Documents')


@section('content')

     @if($currentUser)
             {{-- $currentUser->documents --}}
      <table class="table" ng-controller="filelist">
         <th>
            File Name
         </th>
         <th>
            File Path
         </th>
         <th>
            Actions
         </th>
             @foreach($currentUser->documents as $document)

                <tr>
                   <td> {{$document->filename}} </td>
                   <td>{{$document->filepath}}</td>
                   <!-- <td> <a href="#" ng-click="btnclick({{$document->id}})">Delete</a>  </td> -->
                   <td> <a href="delete/{{$document->id}}">Delete</a>  </td>
                </tr>

             @endforeach
      </table>
     @endif
            {!! HTML::script('scripts/controllers/filelist.js') !!}


@endsection
