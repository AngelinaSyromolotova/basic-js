const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  score = 0;    
  
  for (let i = 0; i < str.length; i++){
  counter = 0;    

      while(str[i] == str[score]){
          console.log(str[i], str[score], i, score);
          if(str[i] == str[score]){
              counter++;
          }
          console.log(counter);
          score++;
      }

      if(counter !== 1 && (!newStr.includes(str[i]))){
          newStr += counter + str[i];
      } else if (newStr.slice(-1) !== str[i]){
          newStr += str[i];
      }
  }
  return newStr;
}

module.exports = {
  encodeLine
};
