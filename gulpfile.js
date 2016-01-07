var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    mix.sass('app.scss')
      .copy('node_modules/bootstrap-sass/assets/fonts', 'public/fonts')
      .copy('node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js', 'resources/assets/js');
      //.copy('bower_components/angular-file-upload/dist/angular-file-upload.js', 'resources/assets/js');

      mix.scripts(['bootstrap.min.js','angular-file-upload.js','filelist.js'],
                     'public/scripts/all.js');

});
