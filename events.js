const EventEmitter = require('events');
const http = require('http');
/*
class Sales extends EventEmitter{
    constructor(){
        super();
    }
}
const myEmitter = new Sales();
*/
const myEmitter = new EventEmitter();

myEmitter.on('newSale', () =>{
    console.log('There was new sale!');
});

myEmitter.on('newSale', () =>{
    console.log('Costumer name: Ali Husnain!');
});

myEmitter.on('newSale', (stock) =>{
    console.log(`There are now ${stock} item left in stocks.`);
});

myEmitter.emit('newSale' , 9)

/////////// Ex # 2 ////////////

const server = http.createServer();

server.on('request', (req,resp) =>{
    console.log("Request Received");
    resp.end('Request Received');
})

server.on('request', (req,resp) =>{
    console.log("Another Request Received");
})

server.on('close',() =>{
    console.log('Server Closed!');
})

server.listen(8000,'127.0.0.1',() =>{
    console.log("Waiting for Request....");
})