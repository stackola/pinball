type ShapeType = "line" | "point" | "circle" | "polygon";
type xyObj = {
	x: number,
	y: number
};
type iSpatialInfo = {
	range: {
		x: number,
		y: number,
		w: number,
		h: number
	},
	__b: undefined | number
}
type iCollisionInfo = {
	type: ShapeType,
	points: Array < xyObj > ,
	r: number | null
}

export type CollisionInfo = iCollisionInfo;
export type SpatialInfo = iSpatialInfo;
