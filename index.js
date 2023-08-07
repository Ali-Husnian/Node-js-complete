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

/*
fs.readFile(`${__dirname}/dog.txt`,(err,data) => {
    // without promise
    console.log(`Breed: ${data}`);

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then(res => { // resolved promises
        // full fill success
        console.log(res.body.message);

        fs.writeFile('dog-img.txt',res.body.message , (err) => {
            if(err) return console.log(err.message);
            console.log('Rendom Dog image saved in file');
        })
    })
    .catch(err => {  // reject promis
        // throw error
        console.log(err.message);
    })
})


*/
/////////// final
const readFilePromis = (file) => {
    return new Promise( (resolve,reject) => {
        fs.readFile(`${file}`, (err,data) => {
            if(err) reject('Could not find that file 🤣😂😂');
            resolve(data);
        })
    })
}
const writeFilePromise = ((file,data) => {
    return new Promise( (resolve,reject) => {
        fs.writeFile(file,data, (err) => {
            if(err) reject('Could not write file 🤣😂😂');
            resolve('success');
        })
    })
})

const getDogPic = async () => {
    try {
        const data = await readFilePromis(`${__dirname}/dog.txt`)
        console.log(`Breed: ${data}`);
    
        const res = await superagent
        .get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);
    
        await writeFilePromise('dog-img.txt',res.body.message);
        console.log('Rendom Dog image saved in file');
    } catch (err) {
        console.log(err);
        throw err;
    }
    return "2:Ready 🐶";  
}
/////////// error heandle catch method
( async ()=>{
    try {
        console.log("1:I will get dog pics")
        const x = await getDogPic()
        console.log(x);
        console.log("3:Done I will getting dog pics")
    } catch (err) {
        console.log("ERROR 🎇");
    }
})();

/*
/////////// error heandle catch method
console.log("1:I will get dog pics")
getDogPic().then( (x) => {
    console.log(x);
    console.log("3:Done I will getting dog pics")
})
.catch(err =>{
    console.log("ERROR 🎇");
})


*/   /*
    readFilePromis(`${__dirname}/dog.txt`).then(data => {
        console.log(`Breed: ${data}`);
        return superagent
        .get(`https://dog.ceo/api/breed/${data}/images/random`)
    })
    .then( (res) => { 
        console.log(res.body.message);
        return writeFilePromise('dog-img.txt',res.body.message);
    }).then( () => {
        console.log('Rendom Dog image saved in file');
    })
    .catch(err => {  
        console.log(err);
    })
   */
///////////// final end