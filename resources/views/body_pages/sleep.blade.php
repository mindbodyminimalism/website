<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Sleep</title>

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
            Sleep
        </div>

        <div class="links">
            <a href="{{ url('/body') }}">Back</a>
        </div>
    </div>
</div>
<div class="row container">
    <div class="sub-col">
        <p>Welcome to the Mind Body Minimalism sleep section, where we recognize the transformative power of a good night's
            rest. Quality sleep is the cornerstone of overall well-being, affecting every aspect of our physical and mental
            health. In a fast-paced world with constant distractions, achieving restful sleep can be a challenge. That's
            where Mind Body Minimalism comes in to simplify and optimize your sleep habits. Our personalized recommendations
            and tracking tools help you establish a soothing bedtime routine tailored to your needs, promoting deeper and
            more rejuvenating slumber. By revealing you actual sleep patterns, you can more quickly identify the sleep you
             are getting and the sleep you need. Embrace the tranquility of restful sleep and unlock the potential
            for improved focus, mood, and energy throughout your waking hours. With Mind Body Minimalism, sleep becomes a
            sanctuary for self-renewal, enabling you to embrace each day with clarity and vitality.
        </p>
    </div>
</div>


</body>
</html>
