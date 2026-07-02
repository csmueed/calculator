const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

let firstNumber = "";
let secondNumber = "";
let Operator = "";
let result = "";

let allOperators = ["-", "+", "*", "/"];
let allNumbers = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (allNumbers.includes(button.textContent) && firstNumber === "") {
      display.value += button.textContent;
    } else if (allOperators.includes(button.textContent)) {
      firstNumber = display.value;
      display.value = "";
      Operator = button.textContent;
    } else if (allNumbers.includes(button.textContent) && firstNumber !== "") {
      display.value += button.textContent;
      secondNumber += button.textContent;
    } else if (button.textContent === "=") {
      result = "";
      display.value = "";
      result = calculate(Number(firstNumber), Number(secondNumber), Operator);
      display.value = result;
      firstNumber = "";
      secondNumber = "";
      Operator = "";
      firstNumber = result;
      result = "";
    } else if (button.textContent === "Clear") {
      clearAll();
    }
  });
});

function calculate(firstNumber, secondNumber, Operator) {
  if (Operator === "+") {
    let result = firstNumber + secondNumber;
    return Number(result.toPrecision(2));
  } else if (Operator === "-") {
    let result = firstNumber - secondNumber;
    return Number(result.toPrecision(2));
  } else if (Operator === "*") {
    let result = firstNumber * secondNumber;
    return Number(result.toPrecision(2));
  } else if (Operator === "/") {
    let result = firstNumber / secondNumber;
    return Number(result.toPrecision(2));
  }
}

function clearAll() {
  firstNumber = "";
  secondNumber = "";
  Operator = "";
  result = "";
  display.value = "";
}
