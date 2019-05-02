const apiCallFromRequest = require('./request')
const apliCallFromNode = require('./nodeJsCall')

const http = require('http')

http.createServer((req, res) => {
    if(req.url === "/request"){
        apiCallFromRequest.callApi(function(response){
            res.write('index.html');
            res.end();
        });
    }
    else if(req.url === "/node"){
        apliCallFromNode.callApi(function(response){
            res.write(response);
            res.end();
        });
    }

}).listen(3000);

console.log("service running on 3000 port...");