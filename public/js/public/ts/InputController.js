"use strict";
exports.__esModule = true;
var THREE = require("../../node_modules/three/build/three.js");
var InputController = (function () {
    function InputController(game, canvas, document) {
        this.mousePosition = { x: 0, y: 0 };
        this.absMousePosition = { x: 0, y: 0 };
        this.canvas = canvas;
        this.game = game;
        document.addEventListener("mousemove", this.mouseMove.bind(this));
    }
    InputController.prototype.getMousePosition = function () {
        var rayCaster = new THREE.Raycaster();
        rayCaster.setFromCamera(this.absMousePosition, this.game.camera);
        var intersects = rayCaster.intersectObjects(this.game.scene.children, true);
        if (intersects.length > 0)
            this.mousePosition = { x: intersects[0].point.x, y: intersects[0].point.y };
        return this.mousePosition;
    };
    InputController.prototype.mouseMove = function (evt) {
        evt.preventDefault();
        this.absMousePosition.x = ((evt.clientX) / this.canvas.width) * 2 - 1;
        this.absMousePosition.y = -((evt.clientY) / this.canvas.height) * 2 + 1;
    };
    return InputController;
}());
exports["default"] = InputController;
