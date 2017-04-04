"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var react_redux_1 = require("react-redux");
var BasicInfo = (function (_super) {
    __extends(BasicInfo, _super);
    function BasicInfo() {
        return _super.call(this) || this;
    }
    BasicInfo.prototype.render = function () {
        return (React.createElement("div", null, "thing"));
    };
    return BasicInfo;
}(React.Component));
BasicInfo = __decorate([
    react_redux_1.connect(function (state) { return ({ user: state.user }); })
], BasicInfo);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BasicInfo;
//# sourceMappingURL=basicinfo.js.map