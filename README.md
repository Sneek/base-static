# Sneek - Base Static Site

A really simple starting point for frontend templating.Be sure to download a zip (not clone the repo;
unless you are making a pull request of course!)

## Getting Started

You will need [node](nodejs.org) installed along with [gulp](gulpjs.com). (Ideally these are installed globally).

Start by navigating to the new site in terminal / [iTerm](iterm2.com) or which ever shell you use. Install
the required node modules using the following:

    npm install

Once installed you are ready to go with:

    gulp

The gulp task will watch for the relevant files being changed and automagically compile your JS & CSS.

## Asset Versions / Names

The asset output version / name can be modified by changing the variable in the `lib/js/tasks/(less|scripts).js` file.
Don't forget to update your `header.php` and `footer.php` files!