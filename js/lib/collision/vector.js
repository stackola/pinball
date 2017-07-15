"use strict";
exports.__esModule = true;
var Vector = (function () {
    function Vector(point, other) {
        if (typeof point === 'number') {
            this.x = point;
            this.y = other;
        }
        else if (typeof point === 'object') {
            this.x = point.x;
            this.y = point.y;
        }
    }
    /**
     * 向量相加
     * @param {Vector} vector 相加的向量
     */
    Vector.prototype.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    };
    ;
    /**
     * 向量相减
     * @param  {Vector} vector 被减的向量
     * @return {Vector}        返回一个新向量
     */
    Vector.prototype.substract = function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    };
    ;
    /**
     * 获得该向量端点到参数点的向量
     * @param  {Point}  point   参数点
     * @return {Vector}         新向量，由参数点指向自身的端点
     */
    Vector.prototype.edge = function (point) {
        return this.substract(new Vector(point));
    };
    ;
    /**
     * 求该向量的垂直向量
     * @return {Vector}
     */
    Vector.prototype.prependicular = function () {
        return new Vector({ x: this.y, y: -this.x });
    };
    ;
    /**
     * 获得该向量的模，即长度
     * @return {number} 模的值
     */
    Vector.prototype.getMagnitude = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    ;
    /**
     * 获得该向量的单位向量
     * @return {Vector} 返回单位向量
     */
    Vector.prototype.normalize = function () {
        var v = new Vector({ x: 0, y: 0 }), m = this.getMagnitude();
        if (m !== 0) {
            v.x = this.x / m;
            v.y = this.y / m;
        }
        return v;
    };
    ;
    /**
     * 获得两个向量的点积
     * @param  {Vector} vector 另一个向量
     * @return {number}        返回点积值
     */
    Vector.prototype.dotProduct = function (vector) {
        return this.x * vector.x + this.y * vector.y;
    };
    ;
    /**
     * 获取法向量(单位向量的垂直向量)
     * @return {Vector}
     */
    Vector.prototype.normal = function () {
        return this.prependicular().normalize();
    };
    ;
    return Vector;
}());
exports.Vector = Vector;
