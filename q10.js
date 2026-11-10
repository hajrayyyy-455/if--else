let weight = 70;
let height = 1.75;

if (weight <= 0 || height <= 0) {
  console.log("Invalid input");
} else {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    console.log("BMI " + bmi.toFixed(1) + ", Underweight");
  } else if (bmi < 25) {
    console.log("BMI " + bmi.toFixed(1) + ", Normal");
  } else if (bmi < 30) {
    console.log("BMI " + bmi.toFixed(1) + ", Overweight");
  } else {
    console.log("BMI " + bmi.toFixed(1) + ", Obese");
  }
}