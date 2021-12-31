'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function staircase(n) {
    let counter = 0;
    let arr = [];
    for (let i = n; i > 0; i--) {
        let level = ' '.repeat(counter) + '#'.repeat(i) + '\n';
        arr.push(level);
        counter++;
    }
    const stairs = arr.reverse().join('');
    console.log(stairs);
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
