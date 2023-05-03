function calculateBMI() {
    // Get user input
    const feet = parseInt(document.getElementById('feet').value);
    const inches = parseInt(document.getElementById('inches').value);
    const weight = parseInt(document.getElementById('weight').value);

    // Calculate BMI
    const totalInches = (feet * 12) + inches;
    const heightInMeters = totalInches * 0.0254;
    const weightInKg = weight * 0.453592;
    const bmi = weightInKg / (heightInMeters * heightInMeters);


        if (bmi > 23.9) {
            document.getElementById('result').innerHTML = `Your BMI is high at: ${bmi.toFixed(2)}`;
        } else if (bmi < 18.5) {
            document.getElementById('result').innerHTML = `Your BMI is low at: ${bmi.toFixed(2)}`;
        } else {
            document.getElementById('result').innerHTML = `Your BMI is healthy at: ${bmi.toFixed(2)}`;
        }

    //Sends form data to PHP scrip
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '{{ route("update-user-info") }}');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        // Handle the response from the PHP script, if necessary
    };
    xhr.send('feet=' + feet + '&inches=' + inches + '&weight=' + weight);
}

// Add event listener to the form
const form = document.getElementById('bmi-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    calculateBMI(); // Calculate and display BMI
});

