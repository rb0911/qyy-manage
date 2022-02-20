var http = require('http');
var fs = require('fs');
 
var server = http.createServer();

var handlerequest = function(request,respone){
    // console.log(request)
    // console.log(respone)
    console.log(respone.url)
   var url = request.url;
   if(url=='/'){
    console.log('-----------11111---------')
    console.log(url)
       respone.writeHead(200,{'Content-Type':'text/html'});
        var ns = fs.readFile('./demo/light-button/index.html', function(err, data) {
            if (err) {
                console.error(err);
                return;
            } else {
                console.log('index.html')
                // respone.setHeader('Content-type','text/html;charset=utf-8');
                respone.end(data);
            }
            // respone.end('hello world!');
        });

   }else if(url != '/'){
    console.log('-----------22222---------')
       console.log(url)
       var surl = '.'+url;
       var type = surl.substr(surl.lastIndexOf(".")+1,surl.length)
       console.log(type)
       respone.writeHead(200,{'Content-type':"text/"+type});
       var ns = fs.readFile(surl, function(err, data) {
           if (err) {
               console.error(err);
               return;
           }
           respone.end(data);
       });
   }
}
server.on('request',handlerequest);
 
server.listen(8089,function(){
    console.log("runing...");
})