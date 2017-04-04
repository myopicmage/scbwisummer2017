"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require("react-router");
var AppBar_1 = require("material-ui/AppBar");
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(AppBar_1.default, { title: "SCBWI Summer 2017", iconClassNameRight: "muidocs-icon-navigation-expand-more" }),
            React.createElement(react_router_1.Link, { to: "/admin" }, "admin")));
    };
    return Home;
}(React.Component));
exports.Home = Home;
//# sourceMappingURL=home.js.map