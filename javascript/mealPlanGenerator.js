document.addEventListener('DOMContentLoaded', () => {
  let foodList = new Set(); // To store unique food items for the grocery list

  document
    .querySelector('button[type="submit"]')
    .addEventListener('click', async (event) => {
      event.preventDefault(); // Prevent the default form submission

      // Validate calories input
      const calInput = document.querySelector('#calories');
      if (!calInput.checkValidity()) {
        alert('Please enter a valid caloric intake between 1200 and 6000.');
        return;
      }

      const mealCount = parseInt(document.querySelector('#meals').value, 10);
      const totalMeals = mealCount * 7;
      const selectedDiet = document.querySelector(
        'input[name="diet"]:checked'
      ).value;

      // Capture dietary restrictions
      const restrictionCheckboxes = document.querySelectorAll(
        'input[name="diet[]"]:checked'
      );
      const selectedRestrictions = Array.from(restrictionCheckboxes).map(
        (box) => box.value
      );

      try {
        const mealsResponse = await fetch('../data/meals.json');
        const mealsData = await mealsResponse.json();

        const foodsResponse = await fetch('../data/food.json');
        const foodsData = await foodsResponse.json();

        let mealPlanContainer = document.querySelector('#mealPlanContainer');
        mealPlanContainer.innerHTML = ''; // Clear the previous content

        // Create a table
        const table = document.createElement('table');
        table.classList.add('table');

        // Create a table header row
        const headerRow = document.createElement('tr');
        headerRow.innerHTML =
          '<th>Meal</th><th>Base Food</th><th>Protein</th><th>Vegetable</th>';
        table.appendChild(headerRow);

        let generatedMeals = 0;
        while (generatedMeals < totalMeals) {
          const meal =
            mealsData.meals[Math.floor(Math.random() * mealsData.meals.length)];

          // Filter based on dietary restrictions
          let validMeal = true;
          if (selectedRestrictions.includes('dairy') && meal.has_dairy)
            validMeal = false;
          if (selectedRestrictions.includes('egg') && meal.has_egg)
            validMeal = false;
          if (selectedRestrictions.includes('peanut') && meal.has_peanuts)
            validMeal = false;
          if (selectedRestrictions.includes('soy') && meal.has_soy)
            validMeal = false;
          if (selectedRestrictions.includes('wheat') && meal.has_gluten)
            validMeal = false;
          if (selectedRestrictions.includes('tree-nut') && meal.has_treenuts)
            validMeal = false;

          // Filter based on dietary preferences
          if (selectedDiet === 'vegetarian' && !meal.vegetarian)
            validMeal = false;
          if (selectedDiet === 'vegan' && !meal.vegan) validMeal = false;

          if (!validMeal) {
            continue; // Skip this meal and continue the loop
          }

          const baseFood = foodsData.foods.find(
            (food) => food.id === meal.base_foodtype_id
          );
          const proteinFood = foodsData.foods.find(
            (food) => food.id === meal.protein_foodtype_id
          );
          const vegetableId = meal.vegetable_foodtype_id[0]; // Taking the first vegetable ID
          const vegetableFood = foodsData.foods.find(
            (food) => food.id === vegetableId
          );

          // Add foods to grocery list
          if (baseFood) foodList.add(baseFood.food_name);
          if (proteinFood) foodList.add(proteinFood.food_name);
          if (vegetableFood) foodList.add(vegetableFood.food_name);

          // Create a table row for each meal plan item
          const mealRow = document.createElement('tr');
          mealRow.innerHTML = `
          <td>${meal.meal_title}</td>
          <td>${baseFood ? baseFood.food_name : 'N/A'}</td>
          <td>${proteinFood ? proteinFood.food_name : 'N/A'}</td>
          <td>${vegetableFood ? vegetableFood.food_name : 'N/A'}</td>
        `;

          table.appendChild(mealRow);
          generatedMeals++;
        }

        // Append the table to the mealPlanContainer
        mealPlanContainer.appendChild(table);

        // Create and display "Generate Grocery List" button
        const groceryButton = document.createElement('button');
        groceryButton.innerText = 'Generate Grocery List';

        // Add CSS styles to the button
        groceryButton.style.margin = '20px';
        groceryButton.style.background = '#007bff';
        groceryButton.style.color = '#fff';
        groceryButton.style.cursor = 'pointer';

        groceryButton.addEventListener('click', generateGroceryList);
        mealPlanContainer.appendChild(groceryButton);
      } catch (err) {
        console.error('An error occurred:', err);
      }
    });

  function generateGroceryList() {
    let groceryContainer = document.createElement('ul');
    foodList.forEach((food) => {
      let listItem = document.createElement('li');
      listItem.innerText = food;
      groceryContainer.appendChild(listItem);
    });

    let groceryListContainer = document.querySelector('#groceryListContainer');
    groceryListContainer.innerHTML = '';
    groceryListContainer.appendChild(groceryContainer);

    // Show the grocery list container
    groceryListContainer.style.display = 'block';
  }
});
