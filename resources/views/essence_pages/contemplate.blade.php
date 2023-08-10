<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Contemplate</title>

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
            Contemplate
        </div>

        <div class="links">
            <a href="{{ url('/essence_pages/essence') }}">Back</a>
            <a href="{{ url('/essence_pages/mood_tracker') }}">Mood Tracker</a>
        </div>
    </div>
</div>
<div class="row container">
    <div class="sub-col">
        <p>Introspection is a profound journey of self-exploration, a process of peering into the depths of one's own mind
            and heart. It involves turning inward, seeking to understand the intricate landscape of thoughts, emotions,
            and motivations that shape our very being. Through introspection, we engage in a deliberate and mindful examination
            of our inner world, fostering a heightened sense of self-awareness. This introspective journey allows us to
            gain invaluable insights into our actions, reactions, and decision-making processes. It is a tool for personal
            growth, as we come to recognize and appreciate our strengths and vulnerabilities. Introspection is not about
            judgment, but rather a compassionate and empathetic observation of ourselves, helping us uncover the complexities
            that make us who we are, and guiding us on a path towards greater self-acceptance and understanding.
        </p>
        <p>
            Our tool helps you keep a regular journal where you can write about your thoughts, feelings, and experiences
            in a very simple way. This allows you to reflect on your day, explore your emotions, and gain insights into
            your patterns of thinking. If you have not yet head over the the mediation section and engage in mindfulness
            meditation to quiet your mind and become more aware of your thoughts and feelings. Meditation can help you
            observe your inner world and enhance your self-awareness.
        </p>
    </div>
</div>


</body>
</html>
