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

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let scores = [0, 0]
    
    if (a[0] > b[0]) {
        scores[0] += 1
    } else if (a[0] < b[0]) {
        scores[1] += 1
    }

    if (a[1] > b[1]) {
        scores[0] += 1
    } else if (a[1] < b[1]) {
        scores[1] += 1
    }

    if (a[2] > b[2]) {
        scores[0] += 1
    } else if (a[2] < b[2]) {
        scores[1] += 1
    }

    return scores
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
