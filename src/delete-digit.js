const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {

  let counter = number.toString();
  let array = [];
  let maxNumber = 0;
  let param = "";

  for (let i = 0; i < counter.length; i++){

    for (let j = 0; j < counter.length; j++){
      if(j !== i){
        param += counter[j];
      }
    }
    console.log(param);
    if(param !== 0){
      array.push(parseInt(param));
    }
    param = "";
    console.log(array);
  }
  maxNumber = array.reduce((a, b) => a > b ? a : b);
  return maxNumber;
}

module.exports = {
  deleteDigit
};
