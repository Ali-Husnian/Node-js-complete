// https://dog.ceo/dog-api/documentation/breed ===> https://dog.ceo/api/breed/rottweiler/images/random

const fs = require("fs");
const superagent = require('superagent');

// fs.readFile(`${__dirname}/dog.txt`,(err,data) => {
//     if(err) return console.log(err.message);

//     console.log(`Breed: ${data}`);
//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err,res) => {
//         console.log(res.body.message);

//         fs.writeFile('dog-img.txt',res.body.message , (err) => {
//             if(err) return console.log(err.message);
//             console.log('Rendom Dog image saved in file');
//         })
//     })
// })

///////////////////////////////////////////////////
///////// promises .then or .catch Method

fs.readFile(`${__dirname}/dog.txt`,(err,data) => {
    
    console.log(`Breed: ${data}`);

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then(res => {
        console.log(res.body.message);

        fs.writeFile('dog-img.txt',res.body.message , (err) => {
            if(err) return console.log(err.message);
            console.log('Rendom Dog image saved in file');
        })
    })
    .catch(err => {
        console.log(err.message);
    })
})