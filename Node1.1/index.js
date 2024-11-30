// A good peactice is name the file as index.js because it is an entry point for every developer to look at the backend code
//First thing we need to create the HTTP/API server here
//We will require built in HTTP module for this=====>>>
const http = require("http");
const fs = require("fs");
const path = require("path");
//using this you can make a server lets make
const myServer = http.createServer((req, res)=>{
  // console.log(req.headers);
  const log = `${Date.now()}: ${req.url}New request from user recieved\n`;
  fs.appendFile("log.txt", log, (err, data)=>{
    res.end("Hello from the server created by Hamza Ahmad");
  })
  console.log("Request made to server");

  switch(req.url){
    case "/":
      res.end("HomePage");
      break;
    case "/about":
      res.end("I am Hamza!")
      break;
    default:
      res.end("404 Not Found");
  }

});
// console.log(req);
//request is a object which contains all the information about the request eg. url, headers, body etc. and response is a object which contains all the information about the response eg. status, headers, body etc.

//now in this createServer we have handlers which controls the working of server
//Here we have two arguments
//First one is request and second one is response
//Now we have to listen to the server 
//For this we need a port number on which we make our server listen the request from user
//here were are listening on port 8000\


myServer.listen(8000, ()=>{
  console.log("Server started and Listening on port 8000");
});

