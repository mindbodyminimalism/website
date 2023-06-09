<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Fitness Calculator</title>

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
            Fitness Calculator
        </div>

        <div class="links">
            <a href="{{ url('/') }}">Home</a>
            <a href="{{ url('/body') }}">body</a>
        </div>
    </div>
</div>

<form id="bmi-form">
    <div class="row">
        <div class="input-container col">
            <input type="number" id="feet" value="0" min="1" max="7">
            <label for="feet" class="label">ft</label>
        </div>
        <div class="input-container col">
            <input type="number" id="inches" value="0" min="0" max="11">
            <label for="inches" class="label">in</label>
        </div>
        <div class="input-container col">
            <input type="number" id="weight" value="0" min="60" max="600">
            <label for="weight" class="label">lbs</label>
        </div>
        <div class="input-container col">
            <select name="sex" id="sex">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
    </div>

    <div class="row">
        <button class="button button1 no-print col" type="submit" onclick="calculate()">Calculate</button>
    </div>

</form>

<div class="row">
    <div id="result"></div>
</div>

<div class="row">
    <table>
        <thead>
        <tr>
            <th></th>
            <th>
                <div class="tooltip"> Beginner
                </div>
            </th>
            <th>
                <div class="tooltip"> Intermediate
                </div>
            </th>
            <th>
                <div class="tooltip"> Advanced
                </div>
            </th>
            <th>
                <div class="tooltip"> Master
                </div>
            </th>
            <th>
                <div class="tooltip"> Pro
                </div>
            </th>
            <th>
                <div class="tooltip"> Elite
                </div>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th>Dumbbell Curl
                <!--<button class="icon-btn no-print" onclick="myFunction()">
                 <i class="fa fa-arrow-right"></i>
               </button> -->
            </th>
            <td id="begCurl"></td>
            <td id="intCurl"></td>
            <td id="advCurl"></td>
            <td id="masCurl"></td>
            <td id="proCurl"></td>
            <td id="eliCurl"></td>
        </tr>
        <tr>
            <th>Pulldown Machine</th>
            <td id="begpdown"></td>
            <td id="intpdown"></td>
            <td id="advpdown"></td>
            <td id="maspdown"></td>
            <td id="propdown"></td>
            <td id="elipdown"></td>
        </tr>
        <tr>
            <th>Rowing Machine</th>
            <td id="begrow"></td>
            <td id="introw"></td>
            <td id="advrow"></td>
            <td id="masrow"></td>
            <td id="prorow"></td>
            <td id="elirow"></td>
        </tr>
        <tr>
            <th>Bench Press</th>
            <td id="begBench"></td>
            <td id="intBench"></td>
            <td id="advBench"></td>
            <td id="masBench"></td>
            <td id="proBench"></td>
            <td id="eliBench"></td>
        </tr>
        <tr>
            <th>Lateral Raises</th>
            <td id="beglatr"></td>
            <td id="intlatr"></td>
            <td id="advlatr"></td>
            <td id="maslatr"></td>
            <td id="prolatr"></td>
            <td id="elilatr"></td>
        </tr>
        <tr>
            <th>Tricep Press Machine</th>
            <td id="begtrip"></td>
            <td id="inttrip"></td>
            <td id="advtrip"></td>
            <td id="mastrip"></td>
            <td id="protrip"></td>
            <td id="elitrip"></td>
        </tr>
        <tr>
            <th>DumbbellShrugs</th>
            <td id="begshrug"></td>
            <td id="intshrug"></td>
            <td id="advshrug"></td>
            <td id="masshrug"></td>
            <td id="proshrug"></td>
            <td id="elishrug"></td>
        </tr>
        <tr>
            <th>Chest Fly Machine</th>
            <td id="begcfly"></td>
            <td id="intcfly"></td>
            <td id="advcfly"></td>
            <td id="mascfly"></td>
            <td id="procfly"></td>
            <td id="elicfly"></td>
        </tr>
        <tr>
            <th>Leg Press</th>
            <td id="beglegp"></td>
            <td id="intlegp"></td>
            <td id="advlegp"></td>
            <td id="maslegp"></td>
            <td id="prolegp"></td>
            <td id="elilegp"></td>
        </tr>
        <tr>
            <th>Calf Extention Machine</th>
            <td id="begcext"></td>
            <td id="intcext"></td>
            <td id="advcext"></td>
            <td id="mascext"></td>
            <td id="procext"></td>
            <td id="elicext"></td>
        </tr>
        <tr>
            <th>Hip Abductor</th>
            <td id="beghabd"></td>
            <td id="inthabd"></td>
            <td id="advhabd"></td>
            <td id="mashabd"></td>
            <td id="prohabd"></td>
            <td id="elihabd"></td>
        </tr>
        <tr>
            <th>Hip adductor</th>
            <td id="beghadd"></td>
            <td id="inthadd"></td>
            <td id="advhadd"></td>
            <td id="mashadd"></td>
            <td id="prohadd"></td>
            <td id="elihadd"></td>
        </tr>
        <tr>
            <th>1 Mile Times</th>
            <td id="begrun"></td>
            <td id="intrun"></td>
            <td id="advrun"></td>
            <td id="masrun"></td>
            <td id="prorun"></td>
            <td id="elirun"></td>
        </tr>
    </table>
</div>

<div class="print no-print">
    <input type="button" value="Print Page" onclick="printPage()">
</div>


<!-- Scripts -->
<script>
    function calculate() {
        var sex = document.getElementById("sex").value;
        if (sex === "male") {
            calculateMale();
        } else if (sex === "female") {
            calculateFemale();
        } else {
            alert("Please select a valid sex");
        }
    }
</script>
<script src="{{ asset('js/calculateBMI.js') }}"></script>
<script src="{{ asset('js/liftingranks_male.js') }}"></script>
<script src="{{ asset('js/liftingranks_female.js') }}"></script>

<script>
    function printPage() {
        window.print();
    }
</script>

</body>
</html>
