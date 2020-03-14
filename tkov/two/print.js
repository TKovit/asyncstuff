'use strict'

function print ({word, delay, index}) {
      const smallSpacer = ' '.repeat(10);
      const largeSpacer = ' '.repeat(25);
      const indexString = (index + smallSpacer).substring(0, smallSpacer.length);
      const wordString = (word + largeSpacer).substring(0, largeSpacer.length);
      const timeString = `waited ${delay.toFixed(3)} seconds`;
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(indexString + wordString + timeString);
          resolve(index)
        }, delay*1000);
      });
    }
    
module.exports = {
  print: print
}