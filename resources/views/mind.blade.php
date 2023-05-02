<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>About</title>

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
<div class="flex-center position-ref low-height">

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
        <div class="title m-b-md">
            Mind
        </div>

        <div class="links">
            <a href="{{ url('/') }}">Home</a>
        </div>
    </div>
</div>
<div class="row container">
    <div class="col">
        <p>Learn, Create, and Meditate. When we are mentally fatigued from making too many decisions, our ability
            to concentrate and learn can be compromised. In contrast, when we reduce decision-making, we can improve our
            ability to focus and absorb new information. Before approaching these tools make sure you have balanced your
            routines using the "body" tools. These are crucial steps to ensure basic life decisions aren't taking up too
            much of your mental energy before you have even begun learning and creating.</p>
        <p>When it comes to creative endeavors, decision fatigue can hinder our ability to generate new ideas and make progress
            on our projects. By simplifying and streamlining our routines, Mind Body Minimalism can help free up mental
            energy and creativity, making it easier to engage in creative activities and bring our ideas to life. </p>
        <p>In terms of learning, Mind Body Minimalism can reduce decision fatigue by providing a structured approach to
            learning and tracking progress. By breaking down learning goals into manageable steps and providing personalized
            recommendations, our app can help make the learning process more streamlined and effective.</p>
        <p>When it comes to meditation, we can actually learn to refresh out mind and gain new energy to continue our learning or
            creative endeavors. By providing guided meditations and breathing exercises, we create a more peaceful, restful
            environment for the mind to be re-energized, allowing us to focus on growing in the ways we want.</p>
        <p></p>
    </div>
</div>


</body>
</html>
