const http = require("http");
const fetch = require("node-fetch");

//create server
http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type' : 'text/html'});
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res=>res.json())
    .then(data=>{
        if(request.rawHeaders[3].includes('curl')){
            response.write(data.name + " Terminal, I see you")
        }else{
            response.write(`<h1>${data.name}</h1>`)
        }
        response.end();
    })
    // response.write("<h1>Hello node.js!</h1>"); //we can wrap items in HTML tags
    // response.write("<script>console.log('helloooooooooo')</script>")
}).listen(3000,()=>{
    console.log("Server is running...Port number: 3000"); //this is for developers only so the end user cannot see this
});