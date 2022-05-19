const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const submit = document.querySelector("#submit");
const answer = document.querySelector("#answer");

const calculateBMI = function () {
  const bmi = Math.floor(weight.value / height.value ** 2);
  return bmi;
};

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const userBMI = calculateBMI();
  let message;

  if (userBMI < 18) message = "which means that you are underweight.";
  else if (userBMI > 18 && userBMI < 25)
    message = "which means that you have a normal weight.";
  else if (userBMI > 25 && userBMI < 30)
    message = "which means that you are overweight.";
  else message = "which means that you are obese.";

  answer.textContent = `Your BMI is ${userBMI}% ${message}`;
});
