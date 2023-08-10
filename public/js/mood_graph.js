// Global variables to store mood data
const moodData = {
    dates: [],
    moods: [],
};

let isChartInitialized = false;

// Function to submit the form data
document.getElementById("mood-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const moodInput = document.querySelector('input[name="mood-rating"]:checked');
    const noteInput = document.getElementById("mood-note").value;
    const dateInput = new Date().toLocaleDateString(); // Use the current date as the input date

    if (moodInput) {
        moodData.dates.push(dateInput);
        moodData.moods.push(parseInt(moodInput.value));

        if (isChartInitialized) {
            updateGraph();
        }
    }

    // Reset form fields
    moodInput.checked = false;
    document.getElementById("mood-note").value = "";
});

// Function to update the graph with the new mood data
function updateGraph() {
    const ctx = document.getElementById("moodGraph").getContext("2d");

    // Clear the previous graph
    if (window.moodChart) {
        window.moodChart.destroy();
    }

    // Create the line chart
    window.moodChart = new Chart(ctx, {
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
}

function loadMoodGraph() {
    if (!isChartInitialized) {
        isChartInitialized = true;
        updateGraph();
    }
}
