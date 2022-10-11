const calories = document.querySelector(".bmr-calculator .result .calories"); // returns .bmr-calculator .result and .calories
const calculateBtn = document.querySelector(
  ".bmr-calculator .result .calculate-btn" // returns .bmr-calculator .result . calculate-btn
);
const age = document.querySelector(".bmr-calculator form #age");
const height = document.querySelector(".bmr-calculator form #height");
const weight = document.querySelector(".bmr-calculator form #weight");
const errorMessage = document.querySelector(
  ".bmr-calculator .result .error-message"
);

// BMR = 10*weight + 6.25*height - 5*age + 5
// BMR = 10*weight + 6.25*height - 5*age - 161;

const calculateBMR = (weight, height, age, gender, chooseweight) => { //Calculate BMR
  if (gender == "male" && chooseweight == "moreweight") {
    return 10 * weight + 6.25 * height - 5 * age + 5 + 500;
  } else if (gender == "male" && chooseweight == "lessweight")
  return 10 * weight + 6.25 * height - 5 * age + 5 - 500;
  else if (gender == "male" && chooseweight == "noweight")
  return 10 * weight + 6.25 * height - 5 * age + 5;
  else if (gender == "female" && chooseweight == "moreweight")
  return 10 * weight + 6.25 * height - 5 * age - 161 + 500;
  else if (gender == "female" && chooseweight == "noweight")
  return 10 * weight + 6.25 * height - 5 * age - 161;
  else
  return 10 * weight + 6.25 * height - 5 * age - 161 - 500;
};

calculateBtn.addEventListener("click", () => { //If Calculate is clicked, following events would happen
  if (
    age.classList.contains("invalid") ||
    height.classList.contains("invalid") ||
    weight.classList.contains("invalid")
  ) {
    errorMessage.classList.add("active"); // show error message
    return;
  }

  errorMessage.classList.remove("active"); // remove error message

  let genderValue = document.querySelector(
    ".bmr-calculator form input[name='gender']:checked"
  ).value;

  let chooseweightValue = document.querySelector(
    ".bmr-calculator form input[name='chooseweight']:checked"
  ).value;

  let BMR = calculateBMR(weight.value, height.value, age.value, genderValue, chooseweightValue);

  calories.innerHTML = BMR.toLocaleString("en-US"); // Round number up and return it as string
});

// Input Validation

age.addEventListener("input", (e) => { //Called when an event is triggered
  let ageValue = e.target.value;

  if (!ageValue || isNaN(ageValue) || ageValue < 10 || ageValue > 100) {
    age.classList.add("invalid");
  } else {
    age.classList.remove("invalid");
  }
});

height.addEventListener("input", (e) => {
  let heightValue = e.target.value;

  if (!heightValue || isNaN(heightValue) || heightValue < 0) {
    height.classList.add("invalid");
  } else {
    height.classList.remove("invalid");
  }
});

weight.addEventListener("input", (e) => {
  let weightValue = e.target.value;

  if (!weightValue || isNaN(weightValue) || weightValue < 0) {
    weight.classList.add("invalid");
  } else {
    weight.classList.remove("invalid");
  }
});
