function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function sum(array) {
  let sum = 0;
  for (i in array) {
    sum += array[i];
  }
  return sum
}

function multiply(nums) {
  let product = 1;
  for (i = 0; i < arguments.length; i++) {
    product *= arguments[i];
  }
  return product;
}

function power(num, pow) {
  let result = num ** pow;
  return result;
}

function factorial(num) {
  result = 1;
  if (num === 0) {
    return 1
  }
  if (num === 2) {
    return 2
  }
  for (i = num; i >= 1; i--) {
    result *= num;
    num--;
  }
  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
