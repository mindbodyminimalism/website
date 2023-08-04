<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Learn</title>

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
            Learn
        </div>

        <div class="links">
            <a href="{{ url('/mind') }}">Back</a>
        </div>
    </div>
</div>
<div class="row container">
    <div class="sub-col">
        <p>Welcome to the Mind Body Minimalism learning section, where we believe that knowledge is a powerful tool for
            personal growth and transformation. In a world overflowing with information, it's easy to become overwhelmed
            and fatigued by constant decision-making when it comes to learning new things. At Mind Body Minimalism, we're
            dedicated to streamlining your learning journey. Our platform offers a structured and personalized approach
            to acquiring knowledge, breaking down complex subjects into manageable steps that align with your interests
            and aspirations. By reducing decision fatigue and providing targeted recommendations, we empower you to focus
            on acquiring skills and knowledge that truly matter to you. Whether you're delving into a new hobby, professional
            development, or seeking personal enrichment, our tools will guide you toward a fulfilling and purpose-driven
            learning experience. With Mind Body Minimalism, learning becomes an invigorating voyage of discovery, fueling
            your mind with curiosity and helping you thrive in all aspects of life.
        </p>
    </div>
</div>


</body>
</html>
