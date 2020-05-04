# Laravel/React - Fresh Install Ready To Go

<p>This is a fresh install of laravel that has been setup to use react so there should be not messing around setting it up for every new project.</p>

## Changes Made

<p>This is the list of modifications that have been made:</p>

-   /routes/web.php - Make all requests go to "/"
-   /resources/views/app.blade.php - Renamed to app.blade.php and setup to load css from scss files and React app.
-   /resources/js - Added components folder, tidied up index.js and created a basic app being run from App.js
-   /resources/sass - Added some very basic reset styling to app.scss
-   /package.json - Added @babel/plugin-proposal-class-properties so class properties can be used within react classes.
-   /.babelrc - Setup to run @babel/plugin-proposal-class-properties
-   /webpack.mix.js - Setup to look for index.js

## Setup

<p>In order to get up and running with this setup, clone the project:</p>

```
git clone https://github.com/iBeef/laravel-react.git
```

<p>Then install the project packages with composer and npm</p>

```
composer install

npm i
```

<p>You then need to create a .env file, you can copy the .env.example file and modify it to your liking and generate a new project key</p>

```
php artisan key:generate
```

<p> You may have to mess around with a few file permissions for logs on linux if you're using the /var/www/html directory. Setup a virtual host to look into the public folder and you can start developing with:</p>

```
npm run dev
```

<p>or</p>

```
npm run watch
```

<p>Don't forget to delete the .git folder and initialise your own git project.</p>

## Get Developing & Enjoy!
