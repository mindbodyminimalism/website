<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Essence</title>

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
            Essence
        </div>

        <div class="links">
            <a href="{{ url('/') }}">Home</a>
        </div>
    </div>
</div>
<div class="pic-container">
    <div class="pic-col">
        <p>
            <a href="{{ url('/essence_pages/express') }}">
                <i class="fas fa-5x fa-comment"></i>
            </a>
        </p>
        <p>
            Express
        </p>
    </div>
    <div class="pic-col">
        <p>
            <a href="{{ url('/essence_pages/listen') }}">
                <i class="fas fa-5x fa-assistive-listening-systems"></i>
            </a>
        </p>
        <p>
            Listen
        </p>
    </div>
    <div class="pic-col">
        <p>
            <a href="{{ url('/essence_pages/contemplate') }}">
                <i class="fas fa-5x fa-eye"></i>
            </a>
        </p>
        <p>
            Contemplate
        </p>
    </div>
</div>
<div class="row container">
    <div class="sub-col">
        <p>Express, Listen, and Contemplate: Before delving into these tools, ensure your routines are balanced using the
            "body" tools to avoid expending excessive mental energy on basic life decisions. Through Exploration, we
            encourage you to communicate your personal thoughts to people. By listening, we ask that you listen to other
            communicating their personal thoughts and ideas. Lastly, we explore contemplation, where we invite you to
            nurture your soul through introspection.</p>
    </div>
</div>


</body>
</html>

