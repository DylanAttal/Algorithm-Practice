'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
function marsExploration(s) {
    const threeLetterGroups = s.match(/[A-Z]{3}/g);
    let counter = 0;
    for (let i = 0; i < threeLetterGroups.length; i++) {
        if (threeLetterGroups[i][0] !== "S") {
            counter++;
        }
        
        if (threeLetterGroups[i][1] !== "O") {
            counter++;
        }
        
        if (threeLetterGroups[i][2] !== "S") {
            counter++;
        }
    }
    return counter;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}