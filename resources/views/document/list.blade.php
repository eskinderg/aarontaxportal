
@extends('layout.master')

@section('title','Documents')


@section('content')

     @if($currentUser)
             {{-- $currentUser->documents --}}
      <table class="table">
         <th>
            File Name
         </th>
         <th>
            File Path
         </th>
             @foreach($currentUser->documents as $document)

                <tr>
                   <td> {{$document->filename}} </td>
                   <td>{{$document->filepath}}</td>
                </tr>

             @endforeach
      </table>
     @endif
            {!! HTML::script('scripts/controllers/uploadcontroller.js') !!}


@endsection
