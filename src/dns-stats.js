const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  for (let i = 0; i < domains.length; i += 1) {
    let element = domains[i].split(".").reverse();
    let acc = "";
    for (let j = 0; j < element.length; j += 1) {
      acc = acc + "." + element[j];
      res[acc] = (res[acc] || 0) + 1;
    }
  }
  return res;
}

module.exports = {
  getDNSStats,
};
