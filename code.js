console.log("BMI Calculator");

function calculate() {
  let weight = document.getElementById("weight");
  let height = document.getElementById("height");

  let result = (weight.value / (height.value * height.value)).toFixed(2);

  let final = document.getElementById("final");

  let res = result;

  if (res < 18.5) {
    console.log(result + " - " + "You are Underweight, Please Consult!");
  } else if (res >= 18.5 && res <= 24.9) {
    console.log(result + " - " + "Your weight is Normal");
  } else if (res >= 25 && res <= 29.9) {
    console.log(result + " - " + "You are Overweight");
  } else if (res >= 30 && res < 35) {
    console.log(result + " - " + "Your weight falls under Obesity");
  } else if (result > 35) {
    console.log(
      result + " - " + "Your weight falls under Severe-Obesity, Please Consult!"
    );
  }

  final.innerText = result;
}
