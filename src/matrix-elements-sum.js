const { NotImplementedError } = require("../lib");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let acc = 0;
  let isValid = Array.from({ length: matrix[0].length }, () => true);
  for (let col = 0; col < matrix.length; col++) {
    for (let row = 0; row < matrix[col].length; row++) {
      let val = matrix[col][row];
      if (val > 0 && isValid[row]) {
        acc += val;
      } else {
        isValid[row] = false;
      }
    }
  }
  return acc;
}

module.exports = {
  getMatrixElementsSum,
};
