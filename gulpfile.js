var elixir = require('laravel-elixir');

elixir.config.production = true;
elixir.config.publicDir = 'lib';
elixir.config.assetsDir  = 'lib/resources/assets/';
elixir.config.cssOutput  = 'lib/build/css';
elixir.config.jsOutput   = 'lib/build/js';

/*
 |
 | Elixir Asset Management
 |
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('frontend.less', 'lib/css', null, true)
        .scripts([
                'jquery.min.js',
                'bootstrap.min.js',
                'frontend.js',
            ], 'lib/js/frontend.js', 'lib/resources/assets/js')
       .version([
           'css/frontend.css',
           'js/frontend.js'
       ]);
});
