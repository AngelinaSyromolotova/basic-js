const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(reverse) {
      this.reverse = false;
      if (reverse === false) {
          this.reverse = true;
      }

      this.table = {
          a: "abcdefghijklmnopqrstuvwxyz",
          b: "bcdefghijklmnopqrstuvwxyza",
          c: "cdefghijklmnopqrstuvwxyzab",
          d: "defghijklmnopqrstuvwxyzabc",
          e: "efghijklmnopqrstuvwxyzabcd",
          f: "fghijklmnopqrstuvwxyzabcde",
          g: "ghijklmnopqrstuvwxyzabcdef",
          h: "hijklmnopqrstuvwxyzabcdefg",
          i: "ijklmnopqrstuvwxyzabcdefgh",
          j: "jklmnopqrstuvwxyzabcdefghi",
          k: "klmnopqrstuvwxyzabcdefghij",
          l: "lmnopqrstuvwxyzabcdefghijk",
          m: "mnopqrstuvwxyzabcdefghijkl",
          n: "nopqrstuvwxyzabcdefghijklm",
          o: "opqrstuvwxyzabcdefghijklmn",
          p: "pqrstuvwxyzabcdefghijklmno",
          q: "qrstuvwxyzabcdefghijklmnop",
          r: "rstuvwxyzabcdefghijklmnopq",
          s: "stuvwxyzabcdefghijklmnopqr",
          t: "tuvwxyzabcdefghijklmnopqrs",
          u: "uvwxyzabcdefghijklmnopqrst",
          v: "vwxyzabcdefghijklmnopqrstu",
          w: "wxyzabcdefghijklmnopqrstuv",
          x: "xyzabcdefghijklmnopqrstuvw",
          y: "yzabcdefghijklmnopqrstuvwx",
          z: "zabcdefghijklmnopqrstuvwxy"
      };
  }

  encrypt(message, keyword) {
      if (message === undefined || typeof(message) !== "string") {
          throw Error('Incorrect arguments!');
      }
      if (keyword === undefined || typeof(keyword) !== "string") {
          throw Error('Incorrect arguments!');
      }

      message = message.toLowerCase();
      keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
      let encryptedMessage = "";
      let specialCharacterCount = 0;

      for (let i = 0; i < message.length; i++) {
          let keyLetter = (i - specialCharacterCount) % keyword.length;
          let keywordIndex = this.table.a.indexOf(keyword[keyLetter]);

          if (this.table[message[i]]) {
              encryptedMessage += this.table[message[i]][keywordIndex];
          } else {
              encryptedMessage += message[i];
              specialCharacterCount++;
          }
      }

      let result = encryptedMessage.toUpperCase();

      if (this.reverse) {
          result = result.split('').reverse().join('');
      }

      return result;
  }

  decrypt(encryptedMessage, keyword) {
      if (encryptedMessage === undefined || typeof(encryptedMessage) !== "string") {
          throw Error('Incorrect arguments!');
      }
      if (keyword === undefined || typeof(keyword) !== "string") {
          throw Error('Incorrect arguments!');
      }

      encryptedMessage = encryptedMessage.toLowerCase();
      keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
      let decryptedMessage = "";
      let specialCharacterCount = 0;

      for (let i = 0; i < encryptedMessage.length; i++) {
          let keyLetter = (i - specialCharacterCount) % keyword.length;
          let keyRow = this.table[keyword[keyLetter]];

          if (keyRow.indexOf(encryptedMessage[i]) !== -1) {
              decryptedMessage += this.table.a[keyRow.indexOf(encryptedMessage[i])];
          } else {
              decryptedMessage += encryptedMessage[i];
              specialCharacterCount++;
          }
      }

      let result = decryptedMessage.toUpperCase();

      if (this.reverse) {
          result = result.split('').reverse().join('');
      }
      
      return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
