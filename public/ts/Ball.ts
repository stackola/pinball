import Vector from "./Vector";

export default class Ball {
	position: Vector;
	gravity: Vector = new Vector(0,1);
	constructor() {
		this.position = new Vector(200, 200);
		console.log("balll created");
	}
	tick(){
		this.position.add(this.gravity);
	}
	draw(context: CanvasRenderingContext2D) {
		context.beginPath();
		context.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI, false);
		context.fillStyle = 'green';
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = '#003300';
		context.stroke();
		context.closePath();
	}
}