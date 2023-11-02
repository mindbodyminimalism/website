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

    // The preference will narrow down the plans further
    matchingPlans = matchingPlans.filter((plan) => {
      if (
        plan.resistance_training &&
        selectedPreferences.includes('resistance')
      ) {
        return true;
      }

      if (plan.cardio && selectedPreferences.includes('cardio')) {
        return true;
      }

      if (plan.yoga && selectedPreferences.includes('yoga')) {
        return true;
      }

      return false;
    });

    // Check if matchingPlans is empty
    if (matchingPlans.length === 0) {
      displayErrorMessage('No matching fitness plans found.');
      return;
    }

    // For a perfect match, we should find the plan that matches all criteria
    let perfectMatch = matchingPlans.find((plan) => {
      return (
        plan.workout_days === numberOfWorkouts &&
        plan.resistance_training ===
          selectedPreferences.includes('resistance') &&
        plan.cardio === selectedPreferences.includes('cardio') &&
        plan.yoga === selectedPreferences.includes('yoga')
      );
    });

    if (!perfectMatch) {
      displayErrorMessage('No perfect matching fitness plan found.');
      return;
    }

    displayPlan(perfectMatch);
  });

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
