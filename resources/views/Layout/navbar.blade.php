<nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="{{route('home')}}">Aaron Portal</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">

              <ul class="nav navbar-nav">

                  <li class="">
                    <a href="{{route('home')}}">
                        <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
                        Home
                    </a>
                  </li>





                    @if(Auth::check())

                    <li>
                      <a href="{{ route('profile') }}">
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                        My Profile
                      </a>
                    </li>


                    <li>
                      <a href="{{ route('document') }}">
                        <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
                        My Documents
                      </a>
                    </li>



                        <li>
                          <a href="{{ route('auth.logout') }}">
                            <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                            Logout {{-- Auth::user()->name --}}
                          </a>
                        </li>
                    @else
                        <li>
                          <a href="{{ route('auth.login') }}">
                            <span class="glyphicon glyphicon-log-in" aria-hidden="true"></span>
                            Login
                          </a>
                        </li>
                        <li><a href="{{ route('auth.register') }}">Register</a></li>
                    @endif

              </ul>

          @if(Auth::check())
              <ul class="nav navbar-nav navbar-right">
                  <li>
                  </li>
              </ul>
          @endif
        </div><!--/.nav-collapse -->
      </div>
   </nav>
