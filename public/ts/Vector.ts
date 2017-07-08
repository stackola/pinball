export default class Vector {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	// Adds a Vector to the current Vector.
	add(v: Vector): Vector {
		this.x += v.x;
		this.y += v.y;
		return this;
	}

	// Multiply both axis by a factor.
	scale(n: number): Vector {
		this.x = this.x * n;
		this.y = this.y * n;
		return this;
	}

	// Normalize to lenth 1.
	normalize(): Vector {
		var l = Math.sqrt(this.x * this.x + this.y * this.y);
		this.x = this.x / l;
		this.y = this.y / l;
		return this;
	}

	// Create a random Vector of length 1
	static random(): Vector {
		return new Vector(Math.random() * 2 - 1, Math.random() * 2 - 1).normalize();
	}
	
	toObject():object{
		return {x:this.x, y:this.y};
	}
}