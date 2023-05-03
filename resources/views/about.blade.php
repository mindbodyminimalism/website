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
            About
        </div>

        <div class="links">
            <a href="{{ url('/') }}">Home</a>
            <a href="{{ url('/fitnesscalculator') }}">Calculator</a>
        </div>
    </div>
</div>
<div class="row container">
    <div class="col">
        <p>Welcome to Mind Body Minimalism, your ultimate guide to living a simpler, happier, and healthier life. Our
            web app is designed to help you streamline your daily routines and make the most of your time, energy, and resources.</p>
        <p>Mind Body Minimalism is designed to help relieve the burden of decision-making in our daily lives. By providing
            personalized recommendations we can help simplify and streamline our routines, reducing the mental load of decision-making.
            By focusing on the essentials and eliminating the excess, we can free ourselves from stress, clutter, and distractions,
            and create space for what truly matters in life. Whether you want to improve your diet, boost your fitness,
            calm your mind, or enhance your sleep, we've got you covered.</p>
        <p>Our platform offers a variety of features and tools to support your journey towards minimalism and wellness.
            You can track your meals, water intake, and exercise habits, and receive personalized recommendations and insights
            based on your goals and preferences. You can also access a library of guided meditations, breathing exercises,
            and relaxation techniques, to help you find peace and balance amidst the chaos of everyday life.</p>
        <p>Our tools are designed to help us simplify and streamline our lives, freeing up mental and physical resources
            to focus on what truly matters. By reducing the burden of decision-making, we can reduce stress, improve our
            well-being, and live more intentionally and joyfully.</p>
        <p>Sign up for Mind Body Minimalism today and start living your best life with less.</p>
    </div>
</div>


</body>
</html>
