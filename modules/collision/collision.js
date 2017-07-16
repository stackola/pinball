"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("./vector");
var graphical_1 = require("./graphical");
var shapeWord = {
    line: "line",
    point: "point",
    circle: "circle",
    polygon: "polygon",
};
var collisionObject;
collisionObject = {
    polygon_circle: function (polygon, circle) {
        var c, p, normals, overlap, pj1, pj2;
        c = new graphical_1.Circle(circle.points[0].x, circle.points[0].x, circle.radius);
        p = new graphical_1.Polygon(polygon.points);
        normals = p.getNormals();
        for (var _i = 0, normals_1 = normals; _i < normals_1.length; _i++) {
            var n = normals_1[_i];
            pj2 = c.getProjection(n);
            pj1 = p.getProjection(n);
            overlap = Math.min(pj1.max, pj2.max) - Math.max(pj1.min, pj2.min);
            if (overlap < 0) {
                return false;
            }
        }
        return true;
    },
    circle_polygon: function (circle, polygon) {
        return this.polygon_circle(polygon, circle);
    },
    polygon_polygon: function (p1, p2) {
        var dp1, dp2, normals, overlap, pj1, pj2;
        dp1 = new graphical_1.Polygon(p1.points);
        dp2 = new graphical_1.Polygon(p2.points);
        normals = dp2.getNormals();
        for (var _i = 0, normals_2 = normals; _i < normals_2.length; _i++) {
            var n = normals_2[_i];
            pj2 = dp1.getProjection(n);
            pj1 = dp2.getProjection(n);
            overlap = Math.min(pj1.max, pj2.max) - Math.max(pj1.min, pj2.min);
            if (overlap < 0) {
                return false;
            }
        }
        return true;
    },
    circle_circle: function (ca, cb) {
        var dca, dcb, distance;
        distance = new vector_1.Vector(ca.points[0]).substract(new vector_1.Vector(cb.points[0])).getMagnitude();
        return distance > ca.radius + cb.radius ?
            false :
            true;
    }
};
function collision(s1, s2) {
    var name_1, name_2;
    name_1 = shapeWord[s1.shape];
    name_2 = shapeWord[s2.shape];
    if (typeof name_1 !== 'string' || typeof name_2 !== 'string') {
        throw new ReferenceError("shape world not exist");
    }
    var methodName = name_1 + "_" + name_2;
    return collisionObject[methodName](s1, s2);
}
exports.collision = collision;
;
