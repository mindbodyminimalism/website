<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Express</title>

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
    </style>
</head>
<body>
<div class="row auth-menu">
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
</div>

<div class="flex-center position-ref low-height">

    <div class="content">
        <div class="title m-b-md">
            Express
        </div>

        <div class="links">
            <a href="{{ url('/body') }}">Back</a>
        </div>
    </div>
</div>
<div class="row container">
    <div class="sub-col">
        <p>When you Express yourself you celebrate the power of authentic self-expression and its transformative impact
            on your soul. You can let go of what weighs heavy on your mind, it can stifle your ability to genuine in other
            places in your life. Mind Body Minimalism encourages you to forge deeper connections with others.
        </p>
        <p>
            Our tool is very simple. It helps you track how frequently you have personal conversations with others. Tracking
            this type of data may help you learn more about your life in relation to other data points found in our tools.
        </p>
    </div>
</div>


</body>
</html>
