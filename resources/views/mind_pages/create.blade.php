<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Create</title>

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
            Create
        </div>

        <div class="links">
            <a href="{{ url('/mind') }}">Back</a>
        </div>
    </div>
</div>
<div class="row container">
    <div class="sub-col">
        <p>Welcome to the Mind Body Minimalism create section, where we celebrate the boundless potential of human creativity.
            We understand that the demands of daily life can stifle your creative pursuits, leaving you feeling uninspired
            and drained. At Mind Body Minimalism, we're committed to unleashing your creative spirit and simplifying the
            process of bringing your ideas to life. Our platform empowers you to streamline your creative endeavors, freeing
            up mental energy and breaking through the barriers of decision fatigue. By providing a space for focused and
            immersive creative activities, we enable you to dive into projects without the burden of constant decision-making.
            Whether you're an artist, writer, musician, or any form of creator, our tools offer personalized suggestions
            and resources that align with your unique vision. Embrace the joy of self-expression, discover the transformative
            power of your creativity, and watch your ideas flourish with Mind Body Minimalism as your creative companion.


        </p>
    </div>
</div>


</body>
</html>
