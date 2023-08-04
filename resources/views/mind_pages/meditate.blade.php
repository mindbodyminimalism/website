<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Meditate</title>

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
            Meditate
        </div>

        <div class="links">
            <a href="{{ url('/mind') }}">Back</a>
        </div>
    </div>
</div>
<div class="row container">
    <div class="sub-col">
        <p>
            Welcome to the Mind Body Minimalism meditate section, where we invite you to embark on a journey of inner peace
            and tranquility. In the midst of life's hustle and bustle, finding moments of stillness can be a challenge.
            That's where Mind Body Minimalism comes in to guide you toward a calmer state of mind. Our platform offers a
            sanctuary of guided meditations, breathing exercises, and relaxation techniques that cater to your unique needs
            and preferences. By simplifying your meditation practice, we help you cultivate a peaceful and rejuvenating
            space for your mind to recharge. Whether you're a seasoned meditator or new to the practice, our personalized
            recommendations ensure that you find the perfect meditation for your current state of mind. Embrace the power
            of mindfulness, and unlock a deeper connection with yourself and the world around you. With Mind Body Minimalism,
            meditation becomes a transformative experience, nurturing your well-being and fostering a sense of balance and
            serenity in your daily life.
        </p>
    </div>
</div>


</body>
</html>
