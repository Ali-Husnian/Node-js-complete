const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req,resp) => {
    // Solution # 1
   /* fs.readFile('test-file.txt','utf-8',(err,data) => {
        if(err) console.log(err);
        resp.end(data)
    })*/

    // Solution # 2
    /*const readable = fs.createReadStream("test-file.txt");
    readable.on('data',(chunk) => {
        resp.write(chunk);
    })

    readable.on('end',() => {
        resp.end();
    })

    readable.on('error', (err) => {
        console.log(err);
        resp.statusCode = 500;
        resp.end('File Not Found!');
    })*/

    // Solution # 3
    const readable = fs.createReadStream("test-file.txt");
    readable.pipe(resp)
    // readableSourse.pipe(WriteableDest);
    
})


server.listen(2822,'127.0.0.1',() => {
    console.log('listening on port 2822 !');
})