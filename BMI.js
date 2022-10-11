const btn = document.getElementById("calculate"); // Return calculate

btn.addEventListener("click", function () { //once calculate is clicked, this funcition will happen
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;

    if (height == "" || weight == "") {
        alert("Please fill out the input fields!");
        return;
    }

    // BMI = weight in KG / (height in m * height in m)

    height = height / 100;

    let BMI = weight / (height * height);

    BMI = BMI.toFixed(2); //fixed numeric value to 2 digits after comma 

    document.querySelector("#result").innerHTML = BMI;

    let status = "";

    if (BMI < 18.5) { //Comments
        status = "Underweight";
    }
    if (BMI >= 18.5 && BMI < 25) {
        status = "Healthy";
    }
    if (BMI >= 25 && BMI < 30) {
        status = "Overweight";
    }
    if (BMI >= 30) {
        status = "Obese";
    }
    document.querySelector(
        ".comment"
    ).innerHTML = `Comment: you are <span id="comment">${status}</span>`;
});
