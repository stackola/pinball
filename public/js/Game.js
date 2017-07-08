"use strict";
exports.__esModule = true;
var THREE = require("../../node_modules/three/build/three.js");
var Game = (function () {
    function Game() {
        var WIDTH = 640;
        var HEIGHT = 480;
        var chunkSize = 15;
        // Set some camera attributes.
        // Create a WebGL renderer, camera
        // and a scene
        this.renderer = new THREE.WebGLRenderer();
        var ASPECT = WIDTH / HEIGHT;
        this.camera = new THREE.OrthographicCamera(-ASPECT * 5, ASPECT * 5, 5, -5, 0.1, 20000);
        this.camera.zoom = 1;
        this.camera.position.z = 10;
        this.camera.updateProjectionMatrix();
        this.scene = new THREE.Scene();
        // var light = new THREE.PointLight(0xffffff);
        // light.position.set(-100, 200, 100);
        this.floor = new THREE.Mesh();
        // this.floor.translateX(chunkSize / 2);
        // this.floor.translateY(chunkSize / 2);
        var geometry = new THREE.CircleGeometry(5, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        var circle = new THREE.Mesh(geometry, material);
        this.scene.add(circle);
        this.scene.add(this.camera);
        this.scene.add(this.floor);
        //this.scene.add(light);
        this.scene.add(new THREE.AxisHelper(5));
        this.renderer.setSize(WIDTH, HEIGHT);
        // Attach the renderer-supplied
        // DOM element.
        var container = document.querySelector('#container');
        container.appendChild(this.renderer.domElement);
        this.renderer.render(this.scene, this.camera);
        this.resize();
        window.addEventListener('resize', this.resize.bind(this));
        this.loop();
    }
    Game.prototype.resize = function () {
        this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        var ASPECT = this.viewport.width / this.viewport.height;
        this.camera.left = -this.viewport.width / 20;
        this.camera.right = this.viewport.width / 20;
        this.camera.top = this.viewport.height / 20;
        this.camera.bottom = -this.viewport.height / 20;
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.camera.updateProjectionMatrix();
    };
    Game.prototype.tick = function () {
        //this.ball.tick();
    };
    Game.prototype.draw = function () {
        this.renderer.render(this.scene, this.camera);
    };
    Game.prototype.loop = function () {
        requestAnimationFrame(this.loop.bind(this));
        this.tick();
        this.draw();
    };
    return Game;
}());
exports["default"] = Game;
