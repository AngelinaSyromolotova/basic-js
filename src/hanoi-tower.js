const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 0;
  let seconds = 0;

  const hanoiStep = function (discsCount) {
      if (discsCount <= 0) {
          return;
      }

      turns++;
  
      hanoiStep(discsCount - 1);
      hanoiStep(discsCount - 1);
  };

  hanoiStep(disksNumber);

  let turnsPerSec = turnsSpeed / 3600;
  seconds = Math.floor(turns / turnsPerSec);

  return {turns: turns, seconds, seconds};
}

module.exports = {
  calculateHanoi
};
