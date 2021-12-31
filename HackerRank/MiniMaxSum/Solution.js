'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    const sortedArr = arr.sort();
    
    const lowestNum = sortedArr.shift();
    const highestValue = sortedArr.reduce((a, c) => a + c, 0);
    
    sortedArr.unshift(lowestNum);
    
    const highestNum = sortedArr.pop();
    const lowestValue = sortedArr.reduce((a, c) => a + c, 0);
    
    console.log(`${lowestValue} ${highestValue}`);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
