const SpatialHash = require('spatialhash-2d');
const collision = require('../../modules/collision/collision').collision;
import Player from "./Player";
export default class Map {
	hash: any;
	bucketSize: number = 10;
	range: {
		x: number,
		y: number,
		w: number,
		h: number
	} = {
		x: 0,
		y: 0,
		w: 500,
		h: 500
	};

	constructor() {
		this.hash = new SpatialHash(this.range, this.bucketSize);

		var m = new Player({
			x: 1,
			y: 1
		}, 10);
		var m2 = new Player({
			x: 50,
			y: 50
		}, 10);
		this.hash.insert(m);
		this.hash.insert(m2);
		console.log("item count", this.hash.itemCount);
		console.log("query", this.hash.query({
			x: 0,
			y: 0,
			w: 1,
			h: 1
		}));
		
		console.log(collision(m, m2));
	}
}