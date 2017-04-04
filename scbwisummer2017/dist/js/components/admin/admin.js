"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require("react-router");
var AppBar_1 = require("material-ui/AppBar");
var Admin = (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(AppBar_1.default, { title: "SCBWI Summer 2017 Admin", iconClassNameRight: "muidocs-icon-navigation-expand-more" }),
            React.createElement(react_router_1.Link, { to: "/" }, "Home")));
    };
    return Admin;
}(React.Component));
exports.Admin = Admin;
//# sourceMappingURL=admin.js.map