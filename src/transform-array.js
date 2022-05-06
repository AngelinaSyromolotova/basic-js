const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr){
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  let result = [];
  
      for(let i = 0; i < arr.length; i++){
          let number = i;
          if(typeof(arr[i]) !== "string" && arr[i] !== undefined){
              result.push(arr[i]);
          }
          if(arr[i] == discardNext){
              i++;
          } else if(arr[i] == discardPrev){
              if(arr[number -= 2] == discardNext){
  
              } else {
              result.pop();
              }
          } else if(arr[i] == doubleNext){
              number += 1;
              result.push(arr[number]);
              number = i;
          } else if(arr[i] == doublePrev){
      
              if(arr[number -= 2] == discardNext){
  
              } else {
                  number = i;
                  number -= 1;
                  result.push(arr[number]);
              }
          }
      }
      return result;
  
  }

module.exports = {
  transform
};
