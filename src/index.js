/**
 * @typedef {Object} Prizes
 * @property {string} first - First prize
 * @property {string} second - Second prize
 */

/** @param {Prizes} prizes */
function logPrizes(prizes) {
  for (const key in prizes) {
    console.log(key, prizes[key].toUpperCase());
  }
}

/** @type {Prizes} */
let prizes = {
  first: 'gold',
  second: 'silver',
};
logPrizes(prizes); // ✅