// import module
const fs = require('fs');
const http = require('http');
const url = require('url');

/**************************/
/*      FILE SYSTEM       */
/**************************/

// Bolocking synchronous way
/*
const textIn = fs.readFileSync('./txt/input.txt','utf-8',);
console.log(textIn);
const textOut = `This what is we know about the avocados: ${textIn}.\nCreate on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textOut);
console.log(`Written File => ${textOut}`);
*/

// Non-bolocking asynchronous way
/*
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
*/
/**************************/
/*         SERVER         */
/**************************/
const replaceTamplete = (temp , product) =>{
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);
    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output; 
}

const tampOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tampCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tampProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res) =>{

    const { query, pathname } = url.parse(req.url, true);
    
    // OVERVIEW PAGE
    if(pathname === '/' || pathname === '/overview'){
        res.writeHead(200,{'Content-type':'text/html'})

        const cardhtml = dataObj.map((el) => replaceTamplete(tampCard ,el)).join('');
        
        const output = tampOverview.replace('{%PRODUCT_CARDS%}',cardhtml);

        res.end(output);

    // PRODUCT PAGE
    } else if(pathname === '/product'){
        res.writeHead(200,{'Content-type':'text/html'})
        const product = dataObj[query.id];
        const output = replaceTamplete(tampProduct,product);
        res.end(output);

     // API   
    } else if(pathname === '/api'){
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(data);

    // 404 page
    } else {  
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header':'hello world'
        });
        res.end('<h1>Page Not Found!</h1>');
    }
})
server.listen(3000,"127.0.0.1",() => {
    console.log('Listening to request on port 3000');
})