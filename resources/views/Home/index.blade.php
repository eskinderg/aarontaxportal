@extends('layout.master')

@section('title','home')


@section('content')

  <h1>
    Welcome {{ $currentUser->firstname or 'guest'}} , This is your home page
  </h1>

  @if($currentUser)
          {{-- $currentUser->messages --}}
  @endif


  <div ng-controller="homecontroller">

  </div>




{!! HTML::script('scripts/controllers/homecontroller.js') !!}

@endsection
