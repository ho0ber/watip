"use strict";

var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "application/json"});
    let ip = request.headers["x-forwarded-for"] || request.connection.remoteAddress.replace(/^.*:/, "");
    response.end(JSON.stringify({"ip": ip, "header_host": request.headers.host, "headers": request.headers}, null, 4));
}).listen(8080);

console.log("wat");
