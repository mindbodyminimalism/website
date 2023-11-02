let fitnessData;

fetch('../data/fitness.json')
  .then((response) => response.json())
  .then((data) => {
    fitnessData = data.fitnessPlan;
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

document
  .getElementById('fitnessPlanForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    // Check if fitnessData is available
    if (!fitnessData) {
      console.error('Fitness data not loaded. Please try again later.');
      return;
    }

    const numberOfWorkouts = parseInt(document.getElementById('days').value);
    let selectedPreferences = Array.from(
      document.querySelectorAll('input[name="pref"]:checked')
    ).map((input) => input.value.toLowerCase());

    // Matching the workout plan based on the number of workout days
    // and then filter by the user's preference
    let matchingPlans = fitnessData.filter(
      (plan) => plan.workout_days === numberOfWorkouts
    );

    // The preference will narrow down the plans further (this can be adjusted as needed)
    matchingPlans = matchingPlans.filter((plan) => {
      // Check if resistance_training is true
      if (
        plan.resistance_training &&
        selectedPreferences.includes('resistance')
      ) {
        return true;
      }
      // Add similar checks for cardio and yoga if needed
      // ...

      return false;
    });

    // Check if matchingPlans is empty
    if (matchingPlans.length === 0) {
      displayErrorMessage('No matching fitness plans found.');
      return;
    }

    // For simplicity, let's display the first matching plan
    let selectedPlan = matchingPlans[0];
    displayPlan(selectedPlan);
  });

function generatePlan(event) {
  event.preventDefault();

  const selectedWorkoutDays = parseInt(
    document.getElementById('meals').value,
    10
  );
  const selectedPreferences = Array.from(
    document.querySelectorAll('input[name="pref"]:checked')
  ).map((input) => input.value);

  // Filter the fitness plans based on user preferences
  const filteredPlans = fitnessData.filter((plan) => {
    // Check if the selected preferences match the plan's properties
    return (
      selectedPreferences.every(
        (preference) => plan[preference.toLowerCase()]
      ) && plan.workout_days === selectedWorkoutDays
    );
  });

  // Check if filteredPlans is empty
  if (filteredPlans.length === 0) {
    const container = document.getElementById('fitnessPlanContainer');
    container.innerHTML = '<p>No matching fitness plans found.</p>';
  } else {
    // For simplicity, let's display the first matching plan
    const selectedPlan = filteredPlans[0];
    displayPlan(selectedPlan);
  }
}

function displayPlan(plan) {
  const container = document.getElementById('fitnessPlanContainer');
  let tableHTML = `<h2>${plan.name}</h2><table class="table">
          <thead>
              <tr>
                  <th>Day</th>
                  <th>Activity</th>
                  <th>Instructions</th>
              </tr>
          </thead>
          <tbody>`;

  for (let i = 1; i <= 7; i++) {
    let day = `Day ${i}`;
    if (plan[day]) {
      tableHTML += `<tr>
                  <td>${day}</td>
                  <td>${plan[day].name}</td>
                  <td>`;

      if (plan[day].Instructions) {
        for (let key in plan[day].Instructions) {
          tableHTML += `<strong>${key}:</strong> ${plan[day].Instructions[
            key
          ].join(', ')}<br>`;
        }
      }

      tableHTML += `</td></tr>`;
    }
  }

  tableHTML += `</tbody></table>`;
  container.innerHTML = tableHTML;
}

function displayErrorMessage(message) {
  const container = document.getElementById('fitnessPlanContainer');
  container.innerHTML = `<p>${message}</p>`;
}
