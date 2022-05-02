const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  let macStr = "ABCDEF0123456789-";
  let newStr = "";
  for (let i = 0; i < inputString.length; i++){
      for (let j = 0; j < macStr.length; j++){
          if (inputString[i] == macStr[j]){
              newStr += inputString[i];
          }           
      }
  }
  if (inputString.length == newStr.length){
      return true;
  } else {
      return false;
  }
  
}
module.exports = {
  isMAC48Address
};
