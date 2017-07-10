import Game from "./Game";
var THREE = require("../../node_modules/three/build/three.js");

export default class Ball {
	
	game:Game;
	circle:THREE.Mesh;
	velocity:THREE.Vector3 = new THREE.Vector3(0,0,0);
	gravity: THREE.Vector3 = new THREE.Vector3(0,-0.01,0);
	constructor(g:Game) {	
		this.game=g;
		console.log("balll created");
		this.draw();
	}
	tick(){
		this.velocity.add(this.gravity);
		if (this.velocity.y < -1){
			this.velocity.setY(-1);
		}
		this.circle.position.add(this.velocity);
		//console.log(this.velocity);
		this.game.camera.position.lerp(this.circle.position, 0.05);
		this.game.camera.position.setZ(10);
		//console.log(this.circle.position);
		//console.log(this.game.camera.position);

	}
	draw() {
		var geometry = new THREE.CircleGeometry( 5, 32 );
		var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
		this.circle = new THREE.Mesh( geometry, material );		
		this.game.scene.add( this.circle )
	}
}