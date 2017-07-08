"use strict";
var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
http.listen(process.env.PORT || 5000, function () {
    console.log('listening on *:5000');
});
app.use(express.static('public'));
var io = require('socket.io')(http);
