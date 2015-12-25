<!DOCTYPE HTML>

<html lang="eng"  ng-app="app">

  <head>
    <meta charset="utf-8">
    <title>Portal</title>
    <meta name="viewport" content="width=device-width">

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
    <script src="https://cdn.rawgit.com/angular-ui/bower-ui-grid/master/ui-grid.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min.js"></script>

    <script src="//code.jquery.com/jquery.js"></script>




    <link rel="stylesheet" href="https://cdn.rawgit.com/angular-ui/bower-ui-grid/master/ui-grid.min.css">

    {!! HTML::script('scripts/all.js') !!}

    {!! HTML::style('css/app.css')!!}

  </head>

  <body style="padding-top:60px;">
   <header>
        @include('layout.navbar')
   </header>

    <div class='container'>

        @include('partials.flash')

        @yield('content')
    </div>


  </body>

</html>
