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

	shape: ShapeType = "circle";
	points: Array < XYObj >
	radius: number | null
	position: XYObj
	constructor(position:XYObj,r){
		this.position = position;
		this.radius=r;
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
		this.radius=newRadius;
		this.range={
			x: this.position.x-this.radius,
			y: this.position.y-this.radius,
			w: this.radius*2,
			h: this.radius*2
		}
	}
	move(newPos:XYObj){
		this.position=newPos;		
		this.points= [this.position];
		this.range={
			x: this.position.x-this.radius,
			y: this.position.y-this.radius,
			w: this.radius*2,
			h: this.radius*2
		}
	}
}