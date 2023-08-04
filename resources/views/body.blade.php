<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Body</title>

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
            Body
        </div>

        <div class="links">
            <a href="{{ url('/') }}">Home</a>
        </div>
    </div>
</div>
<div class="pic-container">
    <div class="pic-col">
        <p>
            <a href="{{ url('/body_pages/eat') }}">
                <i class="fas fa-5x fa-utensils"></i>
            </a>
        </p>
        <p>
            Eat
        </p>
    </div>
    <div class="pic-col">
        <p>
            <a href="{{ url('/body_pages/exercise') }}">
                <i class="fas fa-5x fa-running"></i>
            </a>
        </p>
        <p>
            Exercise
        </p>
    </div>
    <div class="pic-col">
        <p>
            <a href="{{ url('/body_pages/sleep') }}">
                <i class="fas fa-5x fa-bed"></i>
            </a>
        </p>
        <p>
            Sleep
        </p>
    </div>
</div>
<div class="row container">
    <div class="sub-col">
        <p>Eat, Exercise, Sleep. Reduced decision fatigue can have a significant positive impact on our eating, working out, and sleeping habits.
            Decision fatigue occurs when we make a large number of decisions over a period of time, which can lead to mental
            exhaustion and reduced decision-making ability.</p>
        <p>In terms of eating, decision fatigue can make it harder to choose healthy, nutrient-dense foods, as we may be
            more inclined to reach for convenient, processed options. By reducing the mental load of decision-making through
            personalized meal recommendations and tracking tools, Mind Body Minimalism can help make healthy eating choices
            easier and more automatic.</p>
        <p>Similarly, when it comes to working out, decision fatigue can make it harder to stick to a consistent exercise routine.
            By providing customized workout suggestions and tracking tools, Mind Body Minimalism can help reduce the need for
            constant decision-making and make it easier to stay motivated and on track with our fitness goals.</p>
        <p>Overall, reduced decision fatigue through the use of Mind Body Minimalism can help us make healthier choices and
            stick to positive habits around eating, working out, and sleeping. By simplifying and streamlining our routines,
            we can reduce stress and mental exhaustion, and free up mental and physical resources to focus on what truly matters
            in our lives.</p>
    </div>
</div>


</body>
</html>
