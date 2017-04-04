"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require("react-router");
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", { className: "pure-u-1" },
            React.createElement("h1", null, "SCBWI Florida Orlando Conference June 2017 is here!"),
            React.createElement("p", null, "Late registration begins May 12, 2017, so get your registration in early."),
            React.createElement(react_router_1.Link, { to: "/register" }, "Begin!")));
    };
    return Home;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
//# sourceMappingURL=home.js.map