const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
      result.push([]);

      for (let j = 0; j < matrix[i].length; j++) {
          let i_min = i - 1;
          if (i === 0) {
              i_min = i;
          }
          let i_max = i + 1;
          if (i === matrix.length - 1) {
              i_max = i;
          }

          let j_min = j - 1;
          if (j === 0) {
              j_min = j;
          }
          let j_max = j + 1;
          if (j === matrix.length - 1) {
              j_max = j;
          }

          let count = 0;

          
          for (let i_tmp = i_min; i_tmp <= i_max; i_tmp++) {
              for (let j_tmp = j_min; j_tmp <= j_max; j_tmp++) {
                  if (!(i === i_tmp && j === j_tmp)) {
                      if (matrix[i_tmp][j_tmp] === true) {
                          count++;
                      }
                  }
              }
          }
          
          result[i].push(count);
      }
  }

  return result;
}

module.exports = {
  minesweeper
};
