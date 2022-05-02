const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let i = 0;
    
  do {
      i++;
  } while( email[i] !== "@");
  
  let domain = email.slice(i+1,);

  if(domain.indexOf("@") > 0){
      domain = domain.slice(domain.indexOf("@") + 1,);
  }

  return domain;
}

module.exports = {
  getEmailDomain
};
