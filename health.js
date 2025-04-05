// health.js
function calculateHealth() {
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const gender = document.getElementById("gender").value;
    const result = document.getElementById("result");
  
    if (!age || !weight || !height) {
      result.style.display = "block";
      result.innerHTML = "Please enter valid age, weight, and height.";
      return;
    }
  
    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
  
    let bmiCategory = "";
    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi < 24.9) {
      bmiCategory = "Normal weight";
    } else if (bmi < 29.9) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }
  
    let sleepHours = age < 18 ? 9 : 8;
  
    let diet = "";
    let exercise = "";
  
    if (bmr < 1500) {
      diet = "High-protein meals with healthy fats and complex carbs.";
      exercise = "Light exercises like walking, yoga, and stretching.";
    } else if (bmr < 2000) {
      diet = "Balanced diet with fruits, vegetables, and lean protein.";
      exercise = "Moderate workouts like jogging, cycling, or swimming.";
    } else {
      diet = "Calorie-controlled diet with portion monitoring and lots of fiber.";
      exercise = "Intense workouts like HIIT, running, or weight training.";
    }
  
    result.style.display = "block";
    result.innerHTML = `
      <strong>Estimated Daily Calories:</strong> ${Math.round(bmr)} kcal<br>
      <strong>BMI:</strong> ${bmi.toFixed(1)} (${bmiCategory})<br>
      <strong>Suggested Diet:</strong> ${diet}<br>
      <strong>Recommended Exercise:</strong> ${exercise}<br>
      <strong>Recommended Sleep:</strong> ${sleepHours} hours`;
  }
  
  function resetForm() {
    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("gender").value = "male";
    document.getElementById("result").style.display = "none";
    document.getElementById("result").innerHTML = "";
  }
  