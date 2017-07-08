//import Player from "./Player"; 
console.log("hi!");
var viewport:{width:number,height:number};
var canvas:HTMLCanvasElement;
var context:CanvasRenderingContext2D;


function resize(){
	viewport = {
		width : window.innerWidth,
		height : window.innerHeight
	};
	canvas.width = viewport.width;
	canvas.height = viewport.height;
	context.fillStyle="#ff1122";
	context.fillRect(0,0,viewport.width, viewport.height);
}

function ready(){
	canvas = <HTMLCanvasElement>document.getElementById("main");
	context = canvas.getContext("2d");
	resize();
	window.addEventListener('resize', resize);
}


document.addEventListener('DOMContentLoaded', ready);

