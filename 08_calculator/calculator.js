const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	for (i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a * b);
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(num) {
	if (num === 0) return 1;
  let arr = [];
  let factorial = 0;
  for (i = 1; i <= num; i++) {
    arr.push(i);
    factorial = arr.reduce((a,b) => a*b);
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
