type IShapeType = "line" | "point" | "circle" | "polygon";

interface iXYObj  {
	x: number,
	y: number
};
interface ISpatial {
	range: {
		x: number,
		y: number,
		w: number,
		h: number
	},
	__b: undefined | number
}

interface ICollidable{
	shape: IShapeType,
	points: Array < iXYObj > ,
	radius: number | null
}

export type Collidable = ICollidable;
export type Spatial = ISpatial;
export type XYObj = iXYObj;
export type ShapeType = IShapeType;


