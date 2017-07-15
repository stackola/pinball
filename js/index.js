"use strict";
exports.__esModule = true;
var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var Game_1 = require("./model/Game");
http.listen(process.env.PORT || 5001, function () {
    console.log('listening on *:5001');
});
app.use(express.static('public'));
var io = require('socket.io')(http);
var g = new Game_1["default"]();
