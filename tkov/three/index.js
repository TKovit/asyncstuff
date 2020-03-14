// run `npm install async` before

const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const print = require('./print').print;

const startTime = new Date()


function parallel() {
  console.log(`Number of words: ${data.length}`);

  let promises = [];

  let wordonly = data.map(a => a.word);

  const capital = wordonly.filter(s => s[0] !== s[0].toLowerCase());
  //console.log(capital[1]);
  
  //instant = [];
  
  for (var i = 0; i < capital.length; i++) {
    instant = data.filter(a => a.word === capital[i]);
    //console.log(instant);
    
    const indexofcapital = wordonly => wordonly === instant[0];
    //console.log(data.findIndex(indexofcapital));

    print({
      index: (data.findIndex(indexofcapital)) + 1,
      word: instant[0].word,
      delay: 0})
  }

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