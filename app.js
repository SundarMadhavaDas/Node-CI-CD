
'use strict';
// importing node framework
var express = require("express");
 
var app = express();

// Respond with "hello world" for requests that hit our root "/" 

app.get("/", function (req, res) {
   console.log("Run successfully")
   res.send("hello world");
});

// listen to port 3000 by default

app.listen(process.env.PORT || 3000);
 
module.exports = app;