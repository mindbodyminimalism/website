// Import Chart from Chart.js library

const Chart = require('chart.js');


// Define the moodData array
const moodData = {
    dates: [],
    moods: [],
};

// Event listener for form submission
document.getElementById("mood-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const moodInput = document.querySelector('input[name="mood-rating"]:checked');
    const dateInput = new Date().toLocaleDateString();

    if (moodInput) {
        moodData.dates.push(dateInput);
        moodData.moods.push(parseInt(moodInput.value));

        console.log(moodData);
    }

    // Reset form fields
    moodInput.checked = false;
    document.getElementById("mood-note").value = "";
});

// Event listener for "Load Mood Graph" button
document.getElementById("loadMoodGraph").addEventListener("click", function () {
    // Check if the canvas element for the chart already exists
    let canvas = document.getElementById("moodGraph");

    // If it doesn't, create it
    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "moodGraph";
        document.getElementById("chart-container").appendChild(canvas);
    }

    const ctx = canvas.getContext("2d");

    // Create the line chart
    new Chart(ctx, {
        type: "line",
        data: {
            labels: moodData.dates,
            datasets: [
                {
                    label: "Mood",
                    data: moodData.moods,
                    borderColor: "blue",
                    backgroundColor: "rgba(0, 0, 255, 0.2)",
                    fill: true,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: "time",
                    time: {
                        unit: "day",
                        displayFormats: {
                            day: "MMM D",
                        },
                    },
                    title: {
                        display: true,
                        text: "Date",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Mood",
                    },
                    suggestedMin: 1,
                    suggestedMax: 5,
                },
            },
        },
    });
});
