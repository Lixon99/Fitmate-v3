// Get user input
var weight = prompt("What is your weight?");
var height = prompt("What is your height?");
var age = prompt("How old are you?");

console.log("Your weight is " + weight + "!");
console.log("Your height is " + height + "!");
console.log("Your age is " + age + "!");

// Gender
if (confirm("Are you a male?") == true) {
  console.log("You're a male!");
  BMR_Male = `Your BMR is: ${10 * weight + 6.25 * height - 5 * age + 5} !`;
  console.log(BMR_Male);
} else if (confirm("Are you a female?") == true) {
  console.log("You're a female!");
  BMR_Female = `Your BMR is: ${10 * weight + 6.25 * height - 5 * age + - 161} !`;
  console.log(BMR_Female);
} else {
    console.log("Undefine Gender");
}