<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserInfoUpdate extends Controller
{
    public function update(Request $request)
    {
        // Connect to the database
        $servername = "localhost";
        $username = "root";
        // $password = "password";
        $dbname = "mindbodyminimalism";

        $conn = mysqli_connect($servername, $username, $dbname);
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        // Retrieve form data
        $feet = $request->input('feet');
        $inches = $request->input('inches');
        $weight = $request->input('weight');

        // Sanitize and validate input
        $feet = filter_var($feet, FILTER_SANITIZE_NUMBER_INT);
        $inches = filter_var($inches, FILTER_SANITIZE_NUMBER_INT);
        $weight = filter_var($weight, FILTER_SANITIZE_NUMBER_INT);

        if (empty($feet) || empty($inches) || empty($weight)) {
            die("Error: Missing form data");
        }

        // Insert data into the database
        DB::table('user_info')->insert(
            [
                'feet' => $feet,
                'inches' => $inches,
                'weight' => $weight,
            ]
        );

        mysqli_close($conn);

        return "Data inserted successfully";
    }
}
