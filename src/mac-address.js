const { NotImplementedError } = require("../lib");

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
function isMAC48Address(n) {
  const arr = n.split("-");
  if (arr.length !== 6) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 2) return false;

    for (let j = 0; j < arr[i].length; j++) {
      const char = arr[i][j].charCodeAt(0);
      if (!((char > 47 && char < 58) || (char > 64 && char < 71))) {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  isMAC48Address,
};
