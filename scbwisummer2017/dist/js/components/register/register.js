"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require("react-router");
var Register = (function (_super) {
    __extends(Register, _super);
    function Register() {
        return _super.call(this) || this;
    }
    Register.prototype.whatDo = function () {
        if (this.props.children) {
            return this.props.children;
        }
        else {
            return (React.createElement("div", null,
                React.createElement("h1", null, "BEGIN THE REGISTRATION"),
                React.createElement(react_router_1.Link, { to: "/register/1" }, "Go to page 1"),
                React.createElement("br", null),
                React.createElement(react_router_1.Link, { to: "/register/2" }, "Go to page 2")));
        }
    };
    Register.prototype.render = function () {
        return (React.createElement("div", null, this.whatDo()));
    };
    return Register;
}(React.Component));
exports.Register = Register;
//# sourceMappingURL=register.js.map