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
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    const map = {};
    
    candles.forEach(candle => {
        if (map[candle]) {
            map[candle] = map[candle] + 1;
        } else {
            map[candle] = 1;  
        }
    })
    
    
    let numberOfTallestCandles = 0;
    
    for (const [k, v] of Object.entries(map)) {
        if (map[k] > numberOfTallestCandles) {
            numberOfTallestCandles = map[k];
        }
    }
    
    return numberOfTallestCandles;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}
