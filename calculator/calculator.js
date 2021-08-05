const add = function(a, b) {
return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {

	const total = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0);

    return total
};

const multiply = function(array) {
  
	const total = array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue
  });

    return total

};

const power = function(base, exponent) {
	return Math.pow(base, exponent)
};

const factorial = function(num) {

    let rval=1;
    for (let i = 2; i <= num; i++){
        rval = rval * i;
    }
    return rval;

};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
