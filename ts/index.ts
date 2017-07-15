const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
import Game from "./model/Game";

http.listen(process.env.PORT || 5001, function() {
	console.log('listening on *:5001');
});

app.use(express.static('public'));
var io = require('socket.io')(http);


var g = new Game();



