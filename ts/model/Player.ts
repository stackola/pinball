import Circle from "./Circle";
import {XYObj} from "./types";
export default class Player extends Circle {
	constructor(pos: XYObj, r) {
		super(pos, r);		
	}
}