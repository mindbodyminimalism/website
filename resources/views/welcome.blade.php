<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Mind Body Minimalism</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/main.css') }}" />
    <style>
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: 'Raleway';
            font-weight: 100;
            height: 100vh;
            margin: 0;
        }
        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }
    </style>
</head>
<body>
<div class="flex-center position-ref full-height">

    @if (Route::has('login') && Auth::check())
        <div class="top-right links">
            <a href="{{ url('/home') }}">Dashboard</a>
        </div>
    @elseif (Route::has('login') && !Auth::check())
        <div class="top-right links">
            <a href="{{ url('/login') }}">Login</a>
            <a href="{{ url('/register') }}">Register</a>
        </div>
    @endif

    <div class="content">
        <div class="row title m-b-md">
            Mind Body Minimalism
        </div>

        <div class="row container links">
            <a href="{{ url('/about') }}">about</a>
            <a href="{{ url('/body') }}">body</a>
            <a href="{{ url('/mind') }}">mind</a>
        </div>
    </div>
</div>
</body>
</html>
