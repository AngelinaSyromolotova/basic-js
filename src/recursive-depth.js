const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(array) {
      let depth = 1;

      for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {
              let tmpDepth = this.calculateDepth(array[i]) + 1;
              if (tmpDepth > depth) {
                  depth = tmpDepth;
              }
          }
      }

      return depth;

  }
}

const depthCalc = new DepthCalculator();

console.log(depthCalc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));

module.exports = {
  DepthCalculator
};
