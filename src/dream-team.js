const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let acc = [];
  for (let member of members) {
    if (typeof member === "string") {
      let firstLetter = member.trim()[0];
      if (firstLetter) acc.push(firstLetter.toUpperCase());
    }
  }
  return acc.sort().join("");
}

module.exports = {
  createDreamTeam,
};
