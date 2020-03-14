// plz run `npm install async` before, k thanx

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

    data.forEach((value, index) => {
        promises.push(
            print({
                index: index + 1,
                word: value.word,
                delay: value.time
            })
        )
    });
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