const SpatialHash = require('spatialhash-2d');
const collision = require('polygon-collision');
import Player from "./Player";
export default class Map {
	hash: any;
	bucketSize:number = 100;
	range: {
		x: number,
		y: number,
		w: number,
		h: number
	} = {
		x: 0,
		y: 0,
		w: 5000,
		h: 5000
	};

	constructor() {
		this.hash = new SpatialHash(this.range, this.bucketSize);

		var m = new Player({x:1,y:1}, 10);	
		var m2 = new Player({x:25,y:20}, 10);	
		console.log(m);

		console.log(collision(m,m2));
	}
}