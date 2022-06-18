var http = require(`http`);
var server = http.createServer(function(req, res){
    console.log(`request was made: ` + req.url);
    res.writeHead(200,`Content-Type` `text/plain`,);
    res.end(`Hey ninjas`);
    if(req.url === `/home` || req.url === `/`){
        res.writeHead(200,`Content-Type` `text/html`,);
        fs.createReadStream(__dirname + `/index17video.html`).pipe(res);
        }else if(req.url === `./contact`){
            res.writeHead(200,`Content-Type` `text/html`,);
            fs.createReadStream(__dirname + `/contact.html`).pipe(res);
        }else if(req.url === `/api/ninjas`){
            var ninjas = [{name: `ryu`, age:29}, {name: `yoshi`, age:32}];
            res.writeHead(200,`Content-Type` `application/json`,);
            res.end(JSON.stringify(ninjas));
        }else{
            res.writeHead(404, `Content-Type` `text/plain`, );
            fs.createReadStream(__dirname + `./404.html`).pipe(res);
        }
        
});