// import module
const fs = require('fs');

// Bolocking synchronous way
/*
const textIn = fs.readFileSync('./txt/input.txt','utf-8',);
console.log(textIn);
const textOut = `This what is we know about the avocados: ${textIn}.\nCreate on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textOut);
console.log(`Written File => ${textOut}`);
*/

// Non-bolocking asynchronous way
fs.readFile('./txt/start.txt', 'utf-8' ,(err,data1) => {
    if(err) {
        return console.log("Error ! 🎇");
    }
    console.log(data1);
    fs.readFile(`./txt/${data1}.txt`, 'utf-8' ,(err,data2) => {
        console.log(data2);
        fs.readFile('./txt/append.txt' , 'utf-8' , (err,data3) => {
            console.log(data3);
            fs.writeFile('/.txt/final.txt',`${data2}\n${data3}` , (err) => {
                console.log('your file is written');
            })
            
        })
    })

})