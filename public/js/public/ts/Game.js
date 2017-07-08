"use strict";
exports.__esModule = true;
var Ball_1 = require("./Ball");
var Game = (function () {
    function Game(context) {
        this.context = context;
        this.ball = new Ball_1["default"]();
        this.resize();
        window.addEventListener('resize', this.resize.bind(this));
        this.loop();
    }
    Game.prototype.resize = function () {
        this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        this.context.canvas.width = this.viewport.width;
        this.context.canvas.height = this.viewport.height;
    };
    Game.prototype.tick = function () {
        this.ball.tick();
    };
    Game.prototype.draw = function () {
        this.context.fillStyle = "#ff1122";
        this.context.fillRect(0, 0, this.viewport.width, this.viewport.height);
        this.ball.draw(this.context);
    };
    Game.prototype.loop = function () {
        requestAnimationFrame(this.loop.bind(this));
        this.tick();
        this.draw();
    };
    return Game;
}());
exports["default"] = Game;
