const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("#display");
const operator = document.querySelectorAll(".operator");
let firstNumber = "";
let secondNumber = "";
let newOperator = "";
let allOperators = ["-", "+", "*", "/"];
let allNumbers = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
isFirstNumberEmpty = false;
let result = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      allNumbers.includes(button.textContent) &&
      isFirstNumberEmpty == false
    ) {
      display.value += button.textContent;
      firstNumber = display.value;
    } else if (
      allOperators.includes(button.textContent) &&
      isFirstNumberEmpty == false
    ) {
      display.value = "";
    //   display.value = button.textContent;
    //   newOperator = display.value;
      newOperator = button.textContent;
      isFirstNumberEmpty = true;
    } else if (
      allNumbers.includes(button.textContent) &&
      isFirstNumberEmpty == true
    ) {
      display.value += button.textContent;
      secondNumber = display.value;
    } else if (button.textContent === "=") {
      display.value = "";
      result = calculation(
        Number(firstNumber),
        Number(secondNumber),
        newOperator,
      );
      console.log(result);
      display.value = result;
    } else if (button.textContent === "C") {
      display.value = "";
      firstNumber = "";
      secondNumber = "";
      newOperator = "";
      isFirstNumberEmpty = false;
    }
  });
});

function calculation(num1, num2, opt) {
      if (opt === "+") {
        let result = num1 + num2;
        return result.toFixed(2);
      } else if (opt == "-") {
        let result = num1 - num2;
        return result.toFixed(2);
      } else if (opt == "/") {
        let result = num1 / num2;
        return result.toFixed(5);
      } else if (opt == "*") {
        let result = num1 * num2;
        return result.toFixed(7);
      }
    }