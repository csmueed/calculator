const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

let firstNumber = "";
let secondNumber = "";
let Operator = "";
let result = "";
let firstTurn = true;

let allOperators = ["-", "+", "*", "/"];
let allNumbers = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      allNumbers.includes(button.textContent) &&
      Operator === "" &&
      firstTurn === true
    ) {
      display.value += button.textContent;
      firstNumber += button.textContent;
    } else if (
      allOperators.includes(button.textContent) &&
      firstNumber !== "" &&
      secondNumber === "" &&
      Operator === "" &&
      firstTurn === true
    ) {
      display.value = "";
      Operator = button.textContent;
    } else if (
      allNumbers.includes(button.textContent) &&
      Operator !== "" &&
      firstNumber !== "" &&
      firstTurn === true
    ) {
      display.value += button.textContent;
      secondNumber += button.textContent;
    } else if (
      button.textContent === "=" &&
      firstNumber !== "" &&
      secondNumber !== "" &&
      Operator !== ""
    ) {
      display.value = "";
      result = calculate(Number(firstNumber), Number(secondNumber), Operator);
      display.value = result;
      firstNumber = "";
      secondNumber = "";
      Operator = "";
      firstNumber = Number(result);
      firstTurn = false;
    } else if (
      allOperators.includes(button.textContent) &&
      firstTurn === false &&
      Operator === "" &&
      secondNumber === ""
    ) {
      display.value = "";
      Operator = button.textContent;
    } else if (
      allNumbers.includes(button.textContent) &&
      firstTurn === false &&
      Operator !== "" &&
      firstNumber != ""
    ) {
      secondNumber += button.textContent;
      display.value = secondNumber;
    } else if (
      allOperators.includes(button.textContent) &&
      firstNumber !== "" &&
      secondNumber !== "" &&
      Operator !== ""
    ) {
      display.value = "";
      result = calculate(Number(firstNumber), Number(secondNumber), Operator);
      display.value = result;
      Operator = button.textContent;
      firstNumber = "";
      secondNumber = "";
      firstNumber = Number(result);
      result = "";
      firstTurn = false;
    } else if (button.textContent === "Clear") {
      clearAll();
    }
  });
});

function clearAll() {
  display.value = "";
  firstNumber = "";
  secondNumber = "";
  result = "";
  firstTurn = true;
  Operator = "";
}

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
