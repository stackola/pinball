import {
	Collidable,
	Spatial,
	XYObj,
	ShapeType
} from "./types";


export default class Circle implements Collidable, Spatial{
	range: {
		x: number,
		y: number,
		w: number,
		h: number
	}
	__b: undefined | number = undefined;

	type: ShapeType = "circle";
	points: Array < XYObj >
	r: number | null
	position: XYObj
	constructor(position:XYObj,r){
		this.position = position;
		this.r=r;
		this.range={
			x: this.position.x-r,
			y: this.position.y-r,
			w: r*2,
			h: r*2
		}		
		this.points = [this.position];
	}
	toString(){
		return JSON.stringify(this);
	}
	setRadius(newRadius:number){
		this.r=newRadius;
		this.range={
			x: this.position.x-this.r,
			y: this.position.y-this.r,
			w: this.r*2,
			h: this.r*2
		}
	}
	move(newPos:XYObj){
		this.position=newPos;		
		this.points= [this.position];
		this.range={
			x: this.position.x-this.r,
			y: this.position.y-this.r,
			w: this.r*2,
			h: this.r*2
		}
	}
}