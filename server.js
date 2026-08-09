const http=require("http"),fs=require("fs"),path=require("path");
const dir=__dirname;
http.createServer((req,res)=>{let f=path.join(dir,req.url==="/"?"index.html":req.url);try{let c=fs.readFileSync(f);res.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-cache, no-store, must-revalidate","Pragma":"no-cache"});res.end(c)}catch(e){res.writeHead(404);res.end("404")}}).listen(8080,()=>console.log("ok"));
