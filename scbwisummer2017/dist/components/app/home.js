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
var react_router_1 = require("react-router");
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super.call(this) || this;
        _this.createMarkup = function () {
            return {
                __html: _this.props.regData.copy.frontpage
            };
        };
        return _this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", { className: "pure-u-1" },
            React.createElement("div", { dangerouslySetInnerHTML: this.createMarkup() }),
            React.createElement(react_router_1.Link, { to: "/register" }, "Begin!")));
    };
    return Home;
}(React.Component));
Home = __decorate([
    react_redux_1.connect(function (state) { return ({ regData: state.regData }); })
], Home);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
//# sourceMappingURL=home.js.map