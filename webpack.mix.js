require("dotenv").config()
const mix = require('laravel-mix');

mix.webpackConfig({
    output: {
        filename:'[name].js',
        chunkFilename: 'js/chunks/[name][contenthash:6].js',
    },
});
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
mix.version();
