// Define constants for BMI calculation
const baseBMIs = [20.1, 21.7, 23.3, 25, 26.5, 28]; // An array of base BMI values

// Function to calculate target BMI
function calculateTargetBMI(sex, height, sizePref) {
  const adjustment =
    sex === "male"
      ? [75, 72, 71, 68, 67, 65]
      : sex === "female"
      ? [73, 70, 69, 66, 65, 63]
      : [74, 71, 70, 67, 66, 64]; // for "other"

  return height >= adjustment[0]
    ? baseBMIs[sizePref] + 0.8
    : height >= adjustment[1] && height < adjustment[0]
    ? baseBMIs[sizePref] + 0.6
    : height >= adjustment[2] && height < adjustment[1]
    ? baseBMIs[sizePref] + 0.3
    : height >= adjustment[3] && height < adjustment[2]
    ? baseBMIs[sizePref]
    : height >= adjustment[4] && height < adjustment[3]
    ? baseBMIs[sizePref] - 0.3
    : height >= adjustment[5] && height < adjustment[4]
    ? baseBMIs[sizePref] - 0.6
    : height < adjustment[5]
    ? baseBMIs[sizePref] - 0.8
    : baseBMIs[sizePref];
}

// Function to calculate target weight
function calculateWeightFromBMIAndHeight(bmi, heightInInches) {
  const heightInMeters = heightInInches * 0.0254;
  return bmi * Math.pow(heightInMeters, 2) * 2.20462; // Calculate weight in lbs
}

// Function to calculate daily calories
function calculateCalories(sex, weightLbs, heightInches, age, activityLevel) {
  const weightInKilograms = weightLbs * 0.453592;
  const heightCm = heightInches * 2.54;

  let bmr;
  if (sex === "male") {
    bmr = 10 * weightInKilograms + 6.25 * heightCm - 5 * age + 5;
  } else if (sex === "female") {
    bmr = 10 * weightInKilograms + 6.25 * heightCm - 5 * age - 161;
  } else {
    bmr = 10 * weightInKilograms + 6.25 * heightCm - 5 * age - 78;
  }

  let tdee;
  switch (activityLevel) {
    case "sedentary":
      tdee = bmr * 1.2;
      break;
    case "lightly active":
      tdee = bmr * 1.375;
      break;
    case "moderately active":
      tdee = bmr * 1.55;
      break;
    case "very active":
      tdee = bmr * 1.725;
      break;
    case "extremely active":
      tdee = bmr * 1.9;
      break;
    default:
      tdee = bmr * 1.2;
  }
  return `You should aim for ${Math.round(tdee)} calories a day.`;
}

// Form submission event logic
document.getElementById("calorieForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  const sex = this.sex.value;
  const feet = Number(this.feet.value);
  const inches = Number(this.inches.value);
  const totalHeight = feet * 12 + inches;
  const sizePref = Number(this.sizePref.value);
  const age = Number(this.age.value);
  const activityLevel = this.activityLevel.value;

  // Use the defined functions to calculate results
  const targetBMI = calculateTargetBMI(sex, totalHeight, sizePref);
  const targetWeight = calculateWeightFromBMIAndHeight(targetBMI, totalHeight);
  const result = calculateCalories(
    sex,
    targetWeight,
    totalHeight,
    age,
    activityLevel
  );

  // Display the result
  document.getElementById("results").innerText = result;
});
