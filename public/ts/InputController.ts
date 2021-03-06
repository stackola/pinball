import Game from "./Game";
var THREE = require("../../node_modules/three/build/three.js");

export default class InputController {
	mousePosition:{x:number, y:number} = {x:0, y:0};
	absMousePosition:{x:number, y:number} = {x:0, y:0};
	canvas:HTMLCanvasElement;
	game:Game;
	constructor(game,canvas, document:HTMLDocument){
		this.canvas=canvas;
		this.game=game;
		document.addEventListener("mousemove", this.mouseMove.bind(this));
	}	
	getMousePosition():{x:number, y:number}{
		var rayCaster:THREE.Raycaster = new THREE.Raycaster();
		rayCaster.setFromCamera(this.absMousePosition, this.game.camera);
		var intersects = rayCaster.intersectObjects(this.game.scene.children, true);

		if (intersects.length > 0)
			this.mousePosition={x:intersects[0].point.x,y:intersects[0].point.y};
		return this.mousePosition;
	}
	mouseMove(evt){		
		evt.preventDefault();
		this.absMousePosition.x = ((evt.clientX ) / this.canvas.width) * 2 - 1;
		this.absMousePosition.y = -((evt.clientY) / this.canvas.height) * 2 + 1;		
	}

}