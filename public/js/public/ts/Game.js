"use strict";
exports.__esModule = true;
var Ball_1 = require("./Ball");
var InputController_1 = require("./InputController");
var THREE = require("../../node_modules/three/build/three.js");
var _1 = require("../../node_modules/spatial-hash/");
var Game = (function () {
    function Game() {
        var WIDTH = 640;
        var HEIGHT = 480;
        var chunkSize = 15;
        // Set some camera attributes.
        // Create a WebGL renderer, camera
        // and a scene
        this.renderer = new THREE.WebGLRenderer();
        this.spatialhash = new _1["default"]({
            x: 0,
            y: 0,
            width: 10000,
            height: 10000
        }, 100);
        var ASPECT = WIDTH / HEIGHT;
        this.camera = new THREE.OrthographicCamera(-ASPECT * 5, ASPECT * 5, 5, -5, 0.1, 20000);
        this.camera.zoom = 1;
        this.camera.position.z = 10;
        this.camera.updateProjectionMatrix();
        this.scene = new THREE.Scene();
        // var light = new THREE.PointLight(0xffffff);
        // light.position.set(-100, 200, 100);
        // this.floor.translateX(chunkSize / 2);
        // this.floor.translateY(chunkSize / 2);
        this.scene.add(this.camera);
        // Geometry
        var segments = 64;
        var cbgeometry = new THREE.PlaneGeometry(5000, 5000, segments, segments);
        // Materials
        var cbmaterials = [];
        cbmaterials.push(new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide }));
        cbmaterials.push(new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide }));
        var l = cbgeometry.faces.length / 2; // <-- Right here. This should still be 8x8 (64)
        for (var i = 0; i < l; i++) {
            var j = i * 2; // <-- Added this back so we can do every other 'face'
            cbgeometry.faces[j].materialIndex = ((i + Math.floor(i / segments)) % 2); // The code here is changed, replacing all 'i's with 'j's. KEEP THE 8
            cbgeometry.faces[j + 1].materialIndex = ((i + Math.floor(i / segments)) % 2); // Add this line in, the material index should stay the same, we're just doing the other half of the same face
        }
        // Mesh
        var cb = new THREE.Mesh(cbgeometry, new THREE.MeshFaceMaterial(cbmaterials));
        cb.position.setZ(-1);
        this.scene.add(cb);
        //this.scene.add(light);
        this.scene.add(new THREE.AxisHelper(5));
        this.renderer.setSize(WIDTH, HEIGHT);
        // Attach the renderer-supplied
        // DOM element.
        var container = document.querySelector('#container');
        container.appendChild(this.renderer.domElement);
        this.renderer.render(this.scene, this.camera);
        this.resize();
        this.ball = new Ball_1["default"](this);
        this.inputController = new InputController_1["default"](this, this.renderer.domElement, document);
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
        this.ball.tick();
        var mp = this.inputController.getMousePosition();
        var relativeMouseVector = new THREE.Vector3(mp.x, mp.y, 0);
        relativeMouseVector.sub(this.ball.circle.position); // vector points from ball to mouse;
        this.ball.velocity.add(relativeMouseVector.setY(0).normalize().multiplyScalar(0.01));
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
