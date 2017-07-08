(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
//import Player from "./Player"; 
console.log("hi!");
var viewport;
var canvas;
var context;
function resize() {
    viewport = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    context.fillStyle = "#ff1122";
    context.fillRect(0, 0, viewport.width, viewport.height);
}
function ready() {
    canvas = document.getElementById("main");
    context = canvas.getContext("2d");
    resize();
    window.addEventListener('resize', resize);
}
document.addEventListener('DOMContentLoaded', ready);

},{}]},{},[1]);
