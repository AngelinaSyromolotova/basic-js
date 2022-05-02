const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  data: [],
  getLength() {
      return this.data.length;
  },
  addLink(value) {
      if (value === undefined) {
          value = '';
      }
      this.data.push(value);
      return this;
  },
  removeLink(position) {
      if (isNaN(position) || !Number.isInteger(position) 
          || position < 1 || position >= this.data.length) {
          this.data = [];
          throw Error('You can\'t remove incorrect link!');
      }
      this.data.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
      this.data = this.data.reverse();
      return this;
  },
  finishChain() {
      let str = "";
      for (value of this.data) {
          str += `( ${value} )~~`;
      }
      str = str.slice(0, str.length - 2);
      this.data = [];
      return str;
  }
};

console.log(chainMaker.addLink(1).addLink().reverseChain().addLink(3).finishChain());

module.exports = {
  chainMaker
};
