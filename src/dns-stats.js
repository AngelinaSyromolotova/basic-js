const { NotImplementedError } = require('../extensions/index.js');

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
  let dnsStat = {};

  for (dns of domains) {
      let dnsNames = dns.split('.').reverse();
      for (let i = 0; i < dnsNames.length; i++) {
          let domain = '';
          for (let j = 0; j <= i; j++) {
              domain += '.' + dnsNames[j];
          }

          if (domain in dnsStat) {
              dnsStat[domain]++;
          } else {
              dnsStat[domain] = 1;
          }
      }
  }

  return dnsStat;
}

module.exports = {
  getDNSStats
};
