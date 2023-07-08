// import module

const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt','utf-8',);
console.log(textIn);

const textOut = `This what is we know about the avocados: ${textIn}.\nCreate on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt',textOut);

console.log(`Written File => ${textOut}`);

