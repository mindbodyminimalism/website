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


    // Display BMI
    document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
}

// Add event listener to the form
const form = document.getElementById('bmi-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    calculateBMI(); // Calculate and display BMI
});