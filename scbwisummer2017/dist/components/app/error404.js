"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require("react-router");
var Error404 = (function (_super) {
    __extends(Error404, _super);
    function Error404() {
        return _super.call(this) || this;
    }
    Error404.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null, "Looks like you're a little lost! This page can't be found."),
            React.createElement("div", null,
                "Want to go ",
                React.createElement(react_router_1.Link, { to: "/" }, "home"),
                "?")));
    };
    return Error404;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Error404;
//# sourceMappingURL=error404.js.map