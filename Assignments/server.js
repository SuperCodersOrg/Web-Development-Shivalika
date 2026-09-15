const http=require('http');
//console.log(http);
const port=3300;
const server=http.createServer((req,res)=>{
    //  //console.log(res);
    //  res.statusCode=200;
    //  res.statusMessage="ok done";
    //  res.setHeader('content-type','text/plain');
    //  res.write("Hello, this is a simple response!");
     //res.writeHead(200,{'content-type','text/plain'});
    // console.log(req);
    // console.log("url:",req.url);
    // console.log("method:",req.method);
    // console.log("headers:",req.headers); 
    if(req.url==='/home' || req.url==='/'){
        res.end('home page');
    }else if(req.url==='/contact'){
        res.end('contact page');
    }else if(req.url==='/about'){
        res.end('about page');
    }else if(req.url==='/login' && req.method==='GET'){
        res.end('login page');
    }else if(req.url==='/login' && req.method==='POST'){
        res.end('login success');
    }
    else{
        res.statusCode=400;
        res.end('page not found');
    }
    
   // res.end("Hello, from node js.");
});

server.listen(port,()=>{
    console.log("Server is running on port", port);
});