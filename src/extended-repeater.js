const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  str = "" + str;
  let repeatTimes = 1;
  if (options.repeatTimes !== undefined 
      && !isNaN(options.repeatTimes) 
      || Number.isInteger(options.repeatTimes)) {
      repeatTimes = options.repeatTimes;
  }
  let additionRepeatTimes = 1;
  if (options.additionRepeatTimes !== undefined 
      && !isNaN(options.additionRepeatTimes) 
      || Number.isInteger(options.additionRepeatTimes)) {
      additionRepeatTimes = options.additionRepeatTimes;
  }
  let separator = '+';
  if (options.separator !== undefined 
      && typeof(options.separator) === 'string') {
          separator = options.separator;
  }
  let addition = '';
  if (options.addition !== undefined ) {
      addition = '' + options.addition;
  }
  let additionSeparator = '|';
  if (options.additionSeparator !== undefined 
      && typeof(options.additionSeparator) === 'string') {
          additionSeparator = options.additionSeparator;
  }

  let result = '';
  for (let i = 0; i < repeatTimes; i++) {
      result += str;

      for (let j = 0; j < additionRepeatTimes; j++) {
          result += addition;

          if (j + 1 < additionRepeatTimes) {
              result += additionSeparator;
          }
      }

      if (i + 1 < repeatTimes) {
          result += separator;
      }
  }

  return result;
}

module.exports = {
  repeater
};
