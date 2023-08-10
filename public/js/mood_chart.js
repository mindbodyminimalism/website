// Define the moodData array before using it
const moodData = [];

// Event listener for form submission
const moodForm = document.getElementById('mood-form');
moodForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const moodRatingInputs = document.getElementsByName('mood-rating');
    let rating;
    for (let i = 0; i < moodRatingInputs.length; i++) {
        if (moodRatingInputs[i].checked) {
            rating = parseInt(moodRatingInputs[i].value, 10);
            break;
        }
    }

    const moodNoteInput = document.getElementById('mood-note');
    const note = moodNoteInput.value;

    // Save the mood data to the moodData array (replace this with server-side data storage)
    moodData.push({ date: new Date().toISOString().split('T')[0], rating, note });

    // Clear the form inputs
    for (let i = 0; i < moodRatingInputs.length; i++) {
        moodRatingInputs[i].checked = false;
    }
    moodNoteInput.value = '';

    // Redraw the mood chart
    drawChart();
});

// Function to draw the mood chart
function drawChart() {
    const chartContainer = document.getElementById('chart-container');

    // Clear the existing chart
    chartContainer.innerHTML = '';

    // Create a table to display the data
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const dateHeader = document.createElement('th');
    const ratingHeader = document.createElement('th');
    const noteHeader = document.createElement('th'); // New header for notes
    dateHeader.textContent = 'Date';
    ratingHeader.textContent = 'Mood Rating';
    noteHeader.textContent = 'Note'; // New header text
    headerRow.appendChild(dateHeader);
    headerRow.appendChild(ratingHeader);
    headerRow.appendChild(noteHeader); // Add the new header to the row
    table.appendChild(headerRow);

    // Populate the table with mood data
    moodData.forEach((entry) => {
        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        const ratingCell = document.createElement('td');
        const noteCell = document.createElement('td'); // New cell for notes
        dateCell.textContent = entry.date;
        ratingCell.textContent = entry.rating;
        noteCell.textContent = entry.note; // Set the note text
        row.appendChild(dateCell);
        row.appendChild(ratingCell);
        row.appendChild(noteCell); // Add the new cell to the row
        table.appendChild(row);
    });

    // Append the table to the chart container
    chartContainer.appendChild(table);
}

// Initial chart drawing on page load
drawChart();
