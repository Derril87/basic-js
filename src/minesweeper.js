const { NotImplementedError } = require("../lib");

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
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];
  const res = Array.from({ length: matrix.length }, () =>
    new Array(matrix[0].length).fill(0)
  );

  function isValid(row, col) {
    return (
      col >= 0 && col < matrix[0].length && row >= 0 && row < matrix.length
    );
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col]) {
        for (let [dx, dy] of dir) {
          const newRow = row + dx;
          const newCol = col + dy;
          if (isValid(newRow, newCol)) {
            res[newRow][newCol]++;
          }
        }
      }
    }
  }

  return res;
}

module.exports = {
  minesweeper,
};
