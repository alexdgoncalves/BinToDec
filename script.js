const btn = document.querySelector("#btn-convert");
const binary = document.querySelector("#binary");
const decimal = document.querySelector("#decimal");
const calculation = document.querySelector("#calculation");


function calculationSteps(binary, result) {
  let strResult = `(${binary})<sub>2</sub> = `;
  binary = binary.split('');
  let operator = '+'
  let square = binary.length - 1;
  for (const value of binary) {
    if (square === 0) operator = '='
    strResult += `(${value} x 2<sup>${square}</sup>) ${operator} `;
    square--;
  }
  return strResult + `(${result})<sub>10</sub>`;
}

function convertInputToCalculate(binary) {
  return binary = binary.split('').reverse();
}

function calculate(binary) {
  let square = 0;
  let result = BigInt(0);
  for (const i of binary) {
    if (i != 0) result += BigInt(2 ** square);
    square++;
  }
  return result;
}

btn.addEventListener("click", (e) => {
  let value = convertInputToCalculate(binary.value);
  decimal.value = calculate(value);
  calculation.innerHTML = calculationSteps(binary.value, decimal.value);
});


binary.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    let value = convertInputToCalculate(binary.value);
    decimal.value = calculate(value);
    calculation.innerHTML = calculationSteps(binary.value, decimal.value);
  };

  let lastNumber = this.value.substr(this.value.length - 1);

  if ((lastNumber < 0) || (lastNumber > 1)) {
    return this.value = this.value.slice(0, -1);
  };
});