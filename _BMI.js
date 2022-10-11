// Get user input
let weight = prompt("Hvad er din vægt?");
let height = prompt("Hvad er din højde?");

console.log("Din vægt er " + weight + "!");
console.log("Din højde er " + height + "!");

const BMI = weight / height;

console.log("Din BMI er " + BMI.toFixed(2) + "!");

/*
console.log("weight is a " + typeof weight);
console.log("height is a " + typeof height);
*/