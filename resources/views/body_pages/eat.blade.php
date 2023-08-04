<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Eat</title>

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
            Eating
        </div>

        <div class="links">
            <a href="{{ url('/body') }}">Back</a>
        </div>
    </div>
</div>
<div class="row container">
    <div class="sub-col">
        <p>Welcome to the Mind Body Minimalism eating section. In a world filled with endless choices and overwhelming information
            about diets, we strive to simplify the way you approach eating. Our personalized meal recommendations and tracking
            tools aim to reduce decision fatigue, making it easier for you to make healthy and mindful food choices effortlessly.
            By focusing on quality and price we help you break free from the stress of constant decision-making. Now you can
            create a positive and balanced relationship with food that supports your overall well-being..</p>
        <p>With Mind Body Minimalism, meal planning becomes a breeze. We understand that deciding what to eat can be a daily
            struggle, so we're here to help you streamline the process. Our platform offers personalized meal suggestions
            tailored to your dietary preferences, health goals, and lifestyle. Whether you're looking to boost energy,
            manage weight, or simply maintain a balanced diet, our tools will guide you towards making choices that align
            with your body's needs. By reducing the mental load of meal planning, you can enjoy more time and mental energy
            for other aspects of your life, allowing you to savor the joy of cooking and eating without worrying about cost.</p>
    </div>
</div>


</body>
</html>
