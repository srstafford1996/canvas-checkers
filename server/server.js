
var express = require('express');
var app = express();
var Path = require('path');

console.log( __dirname);
app.use( express.static( Path.join( __dirname , '..' ,'/src') ) );

app.listen(3000);