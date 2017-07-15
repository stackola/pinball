"use strict";
exports.__esModule = true;
var vector_1 = require("./vector");
var graphical_1 = require("./graphical");
var shapeWord = {
    line: "line",
    point: "point",
    circle: "circle",
    polygon: "polygon"
};
/**
 * 保存所有碰撞检测主函数的对象
 * 函数命名按照 "图形名_图形名" 的格式
 * @type {Object}
 */
var collisionObject;
collisionObject = {
    /**
     * 多边形与圆形的碰撞检测
     * @param 	{Circle}	circle	圆形
     * @param	{Polygon}	polygon	多边形
     * @return	{boolean}			true表示碰撞，false表示未碰撞
     */
    polygon_circle: function (polygon, circle) {
        var c, p, 
        // 多边形的所有法向量
        normals, 
        // 对于某一个向量，多边形和圆形在此处投影重合的值
        overlap, pj1, pj2;
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
        var dp1, dp2, 
        // 多边形的所有法向量
        normals, 
        // 对于某一个向量，多边形和圆形在此处投影重合的值
        overlap, pj1, pj2;
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
        // 获得两个圆心的向量差，再获得该差的长度。即获得圆心的距离
        distance = new vector_1.Vector(ca.points[0]).substract(new vector_1.Vector(cb.points[0])).getMagnitude();
        // 如果圆心距离大于半径和，则没有碰撞;
        // 圆心距离小于半径和，则发生碰撞
        return distance > ca.radius + cb.radius ?
            false :
            true;
    }
    //TODO： 编写其他类型的碰撞检测函数
};
//TODO: 抽象 TransferData 类
function collision(s1, s2) {
    var name_1, name_2;
    name_1 = shapeWord[s1.shape];
    name_2 = shapeWord[s2.shape];
    if (typeof name_1 !== 'string' || typeof name_2 !== 'string') {
        throw new ReferenceError("shape world not exist");
    }
    /**
     *  使用‘s1.shape’和 's2.shape'去动态的调用方法
     * 	避免了大量的switch,case语句
     */
    var methodName = name_1 + "_" + name_2;
    return collisionObject[methodName](s1, s2);
}
exports.collision = collision;
;
