<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Exercise</title>

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
                Exercise
            </div>

            <div class="links">
                <a href="{{ url('/body') }}">Back</a>
                <a href="{{ url('/body_pages/fitnesscalculator') }}">Calculator</a>
            </div>
        </div>
    </div>
    <div class="row container">
        <div class="sub-col">
            <p>Welcome to the Mind Body Minimalism exercise section, where we believe that staying active is an essential
                component of a balanced and fulfilling life. We understand that maintaining a consistent exercise routine
                can be challenging amidst the demands of modern living. That's why our platform is designed to simplify
                and streamline your fitness journey. Say goodbye to decision fatigue and embrace personalized workout
                suggestions that align with your goals, preferences, and fitness level. Whether you're a seasoned athlete
                or just starting, our tools are here to motivate and support you every step of the way. By freeing up mental
                energy from constant decision-making, you can focus on what truly matters – enjoying the benefits of a
                strong and healthy body, and nurturing your mind and soul through the joy of movement. With Mind Body
                Minimalism, exercise becomes an energizing and rewarding part of your daily routine, empowering you to
                lead an active and vibrant life.
            </p>
            <p>
                Start by trying our <a href="{{ url('/body_pages/fitnesscalculator') }}">fitness calculator</a> to help you set goals
                for yourself!
            </p>

        </div>
    </div>


    </body>
    </html>
