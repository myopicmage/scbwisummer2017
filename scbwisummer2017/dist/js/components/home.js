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
        return (React.createElement("div", null,
            "I am text",
            React.createElement("br", null),
            React.createElement(react_router_1.Link, { to: "/register" }, "Begin registration"),
            React.createElement("br", null),
            React.createElement(react_router_1.Link, { to: "/hello" }, "HELLO")));
    };
    return Home;
}(React.Component));
exports.Home = Home;
//# sourceMappingURL=home.js.map