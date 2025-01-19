let activity = 0;

function usSave() {
  const feet = parseInt(document.getElementById("feet").value, 10);
  const inches = parseInt(document.getElementById("inches").value, 10);
  const weight = parseFloat(document.getElementById("weight").value);
  const age = parseInt(document.getElementById("age").value, 10);
  const activity = parseInt(document.getElementById("activity").value, 10);

  if (isNaN(feet) || isNaN(inches) || isNaN(weight) || isNaN(age) || weight <= 0 || feet <= 0 || age <= 0) {
    document.getElementById("bmr").innerHTML = "Please enter valid positive numbers.";
    return;
  }

  const height = (feet * 12) + inches;
  const bmr = calculateBMR(weight, height, age, "male") * calcActivity(activity);
  document.getElementById("bmr").innerHTML = `Your necessary calorie intake is: ${bmr.toFixed(2)} calories/day.`;
}

function metricSave() {
  const weight = parseFloat(document.getElementById("kg").value);
  const height = parseFloat(document.getElementById("meters").value);
  const age = parseInt(document.getElementById("mAge").value, 10);
  const activity = parseInt(document.getElementById("mActivity").value, 10);

  if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
    document.getElementById("bmr").innerHTML = "Please enter valid positive numbers.";
    return;
  }

  const bmr = calculateBMR(weight, height * 39.37, age, "male") * calcActivity(activity);
  document.getElementById("bmr").innerHTML = `Your necessary calorie intake is: ${bmr.toFixed(2)} calories/day.`;
}

function calculateBMR(weight, height, age, gender) {
  if (gender === "male") {
    return 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
  } else if (gender === "female") {
    return 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
  }
  return 0;
}

function calcActivity(activity) {
  switch (activity) {
    case 1:
    case 0:
      return 1.2;
    case 2:
      return 1.4;
    case 3:
      return 1.55;
    case 4:
      return 1.7;
    case 5:
      return 1.9;
    case 6:
      return 2.0;
    case 7:
      return 2.5;
    default:
      return 1.2; // Default sedentary activity
  }
}
