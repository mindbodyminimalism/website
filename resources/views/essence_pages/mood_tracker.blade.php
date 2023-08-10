<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Mood Tracker</title>

</head>
<link rel="stylesheet" href="{{ asset('css/main.css') }}" />

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
            Mood Tracker
        </div>

        <div class="links">
            <a href="{{ url('/') }}">Home</a>
            <a href="{{ url('/essence_pages/contemplate') }}">Back</a>
        </div>
    </div>
</div>
<body>
<div class="mood container">
    <form id="mood-form" class="form-container">
        <div class="form-row">
            <div class="sub-col">
                <label>Mood Rating:</label><br>
                <input type="radio" id="mood-rating-1" name="mood-rating" value="1" required>
                <label for="mood-rating-1">Terrible</label><br>
                <input type="radio" id="mood-rating-2" name="mood-rating" value="2" required>
                <label for="mood-rating-2">Bad</label><br>
                <input type="radio" id="mood-rating-3" name="mood-rating" value="3" required>
                <label for="mood-rating-3">Fine</label><br>
                <input type="radio" id="mood-rating-4" name="mood-rating" value="4" required>
                <label for="mood-rating-4">Good</label><br>
                <input type="radio" id="mood-rating-5" name="mood-rating" value="5" required>
                <label for="mood-rating-5">Amazing</label><br>
            </div>
            <div class="sub-col">
                <label for="mood-note">Notes (optional):</label>
                <textarea id="mood-note" rows="2" maxlength="64"></textarea>
            </div>
            <div class="sub-col">
                <button type="submit" class="button button1">Submit</button>
            </div>
        </div>
    </form>
</div>

<div class="mood container">
    <div class="sub-col">
        <button id="loadMoodChart">Load Mood Chart</button>
        <button id="loadMoodGraph">Load Mood Graph</button>
    </div>
</div>

<div class="mood container">
    <div class="sub-col">
        <div id="chart-container">
            <!-- The chart will be displayed here -->
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="mood.js"></script>


</body>
</html>
