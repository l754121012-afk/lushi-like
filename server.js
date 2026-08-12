const http=require("http"),fs=require("fs"),path=require("path");
const dir=__dirname;
const types={".html":"text/html; charset=utf-8",".js":"application/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".png":"image/png",".webmanifest":"application/manifest+json; charset=utf-8",".json":"application/json; charset=utf-8",".wav":"audio/wav",".mp3":"audio/mpeg"};
http.createServer((req,res)=>{let f=path.join(dir,req.url==="/"?"index.html":req.url);try{let c=fs.readFileSync(f);let ct=types[path.extname(f).toLowerCase()]||"application/octet-stream";res.writeHead(200,{"Content-Type":ct,"Cache-Control":"no-cache, no-store, must-revalidate","Pragma":"no-cache"});res.end(c)}catch(e){res.writeHead(404);res.end("404")}}).listen(8080,()=>console.log("ok"));
