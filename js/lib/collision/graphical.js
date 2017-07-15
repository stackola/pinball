"use strict";
exports.__esModule = true;
var vector_1 = require("./vector");
var Point = (function () {
    function Point(point, other) {
        if (typeof point === 'number') {
            this.x = point;
            this.y = other;
        }
        else if (typeof point === 'object') {
            this.x = point.x;
            this.y = point.y;
        }
    }
    return Point;
}());
exports.Point = Point;
var Line = (function () {
    function Line(p1, p2) {
        this.points = [p1, p2];
    }
    return Line;
}());
exports.Line = Line;
var Circle = (function () {
    function Circle(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    /**
     * 获得圆在某个向量上的投影
     * @param  {Vector} normal 用以计算的向量
     * @return {Object}        max值投影的最大值，min指最小值
     */
    Circle.prototype.getProjection = function (normal) {
        var projection;
        var v = new vector_1.Vector(this.x, this.y);
        // 此处是使用的点积来代替投影，但只要相比较的图形均使用同一个normal向量，
        // 则比较结果不变，相应的计算结果也不变
        projection = v.dotProduct(normal);
        return {
            max: projection + this.r,
            min: projection - this.r
        };
    };
    return Circle;
}());
exports.Circle = Circle;
var Polygon = (function () {
    /**
     * 多边形构造函数,传入 Point 类型的数组
     * @param {Point[]} points 用以初始化多边形的点，依次连接
     */
    function Polygon(points) {
        // 2 或 更少的点不能创建多边形
        if (points.length <= 2) {
            throw new Error("At leaste 3 points");
        }
        this.points = points;
    }
    /**
     * 获得多边形的所有边的法向量,以数组形式返回
     * @return {Vector[]}  包含所有Vector类型法向量的Array
     */
    Polygon.prototype.getNormals = function () {
        var v1 = new vector_1.Vector(0, 0), v2 = new vector_1.Vector(0, 0), normals = [];
        this.points.forEach(function (point, i, points) {
            v1.x = point.x;
            v1.y = point.y;
            if (i + 1 < points.length) {
                v2.x = points[i + 1].x;
                v2.y = points[i + 1].y;
            }
            else {
                v2.x = points[0].x;
                v2.y = points[0].y;
            }
            // 使用Vector的方法计算
            normals.push(v1.edge(v2).normal());
        });
        return normals;
    };
    /**
     * 返回多边形在参数向量上的点积最大值和最小值
     * @param  {Vector} normal 参数向量
     * @return {Object}        返回投影的最大值和最小值
     */
    Polygon.prototype.getProjection = function (normal) {
        var projections = [], max, min, v;
        this.points.forEach(function (p) {
            v = new vector_1.Vector(p.x, p.y);
            projections.push(v.dotProduct(normal));
        });
        min = Math.min.apply(Math, projections);
        max = Math.max.apply(Math, projections);
        return {
            max: max,
            min: min
        };
    };
    return Polygon;
}());
exports.Polygon = Polygon;
