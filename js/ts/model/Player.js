"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(pos, r) {
        return _super.call(this, pos, r) || this;
    }
    return Player;
}(Circle_1["default"]));
exports["default"] = Player;
