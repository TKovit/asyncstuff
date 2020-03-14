// run `npm install async`

const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const print = require('./print').print;

const startTime = new Date()

function parallel() {
  console.log(`Number of words: ${data.length}`);

  let promises = [];

  for (var i = 0; i < data.length; i++) {
    //console.log(`wait1`)
        promises.push(
          print({
          index: i+1,
          word: data[i].word,
          delay: data[i].time
          })
        );
      }
      
      Promise.all(promises)
          .then((results) => {
            const endTime = new Date();
            console.log(`Total time: ${(endTime - startTime)/1000} seconds`);
          })
          .catch((e) => {
              // Handle errors here
          });
}

parallel()