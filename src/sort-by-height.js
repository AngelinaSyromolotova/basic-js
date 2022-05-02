const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArray = [];
  let index = [];
  let sortArray = [];
  let count = 0;
  let j = 0;

  for (let i = 0; i < arr.length; i++){
      if (arr[i] == (-1)){
          index.push(i);
      } else {
          newArray.push(arr[i]);
      }
  }
  newArray.sort((a, b) => a - b);
  
  for (let i = 0; i < arr.length; i++){
      if (i == index[j]){
          sortArray.push(-1);
          j++;
      } else {
          sortArray.push(newArray[count]);
          count++;
      }
  }
  return sortArray;
}

module.exports = {
  sortByHeight
};
