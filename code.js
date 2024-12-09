console.log("BMI Calculator");

function calculate() {
  let weight = document.getElementById("weight");
  let height = document.getElementById("height");

  let result = (weight.value / (height.value * height.value)).toFixed(2);

  let final = document.getElementById("final");
  let text = document.getElementById("text");

  final.innerText = result;

  if (result < 18.5) {
    final.innerText = "You are Underweight, Please Consult!";
  } else if (result >= 18.5 && result <= 24.9) {
    final.innerText = "Your weight is Normal";
  } else if (result >= 25 && result <= 29.9) {
    final.innerText = "You are Overweight";
  } else if (result >= 30 && result < 35) {
    final.innerText = "Your weight falls under Obesity";
  } else if (result > 35) {
    final.innerText = "Your weight falls under Severe-Obesity, Please Consult!";
  }
}
