const { NotImplementedError } = require('../extensions/index.js');

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
  let j = 0;
  let teamName = "";

  if (members == null || members == false || members == undefined){
    return false;
  }

  for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) === "string"){
          while(members[i][j] == " "){
              j++;
          }
          let letter = members[i][j];
          teamName += letter.toUpperCase();
          j = 0;
      }
  }
  teamName = teamName.split('').sort().join('');
  return teamName;
}

module.exports = {
  createDreamTeam
};
