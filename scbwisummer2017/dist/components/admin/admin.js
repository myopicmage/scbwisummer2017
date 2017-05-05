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
var List_1 = require("material-ui/List");
var AppBar_1 = require("material-ui/AppBar");
var Paper_1 = require("material-ui/Paper");
var Subheader_1 = require("material-ui/Subheader");
var Divider_1 = require("material-ui/Divider");
var file_download_1 = require("material-ui/svg-icons/file/file-download");
var home_1 = require("material-ui/svg-icons/action/home");
var $ = require("jquery");
var Admin = (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super.call(this) || this;
        _this.componentWillUpdate = function () {
            var loggedin = $('#isloggedin');
            if (loggedin.val() !== "True") {
                window.location.href = '/account/login';
            }
        };
        return _this;
    }
    Admin.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(AppBar_1.default, { title: "SCBWI Summer 2017 Admin", iconClassNameRight: "muidocs-icon-navigation-expand-more" }),
            React.createElement("div", { className: "pure-g" },
                React.createElement("div", { className: "pure-u-1-4" },
                    React.createElement(Paper_1.default, { zDepth: 3 },
                        React.createElement(List_1.List, null,
                            React.createElement(Subheader_1.default, null, "Tools"),
                            React.createElement(List_1.ListItem, { primaryText: "Home", leftIcon: React.createElement(home_1.default, null), containerElement: React.createElement(react_router_1.Link, { to: "/dashboard" }) }),
                            React.createElement("a", { href: "/admin/getcsv", style: { textDecoration: 'none' } },
                                React.createElement(List_1.ListItem, { primaryText: "Download Spreadsheet", leftIcon: React.createElement(file_download_1.default, null) })),
                            React.createElement(Divider_1.default, null),
                            React.createElement(Subheader_1.default, null, "Registrations"),
                            React.createElement(List_1.ListItem, { primaryText: "Add", containerElement: React.createElement(react_router_1.Link, { to: "/dashboard/add" }) }),
                            React.createElement(List_1.ListItem, { primaryText: "View", containerElement: React.createElement(react_router_1.Link, { to: "/dashboard/registrations" }) }),
                            React.createElement(Divider_1.default, null),
                            React.createElement(Subheader_1.default, null, "Settings"),
                            React.createElement(List_1.ListItem, { primaryText: "Comprehensives", containerElement: React.createElement(react_router_1.Link, { to: "/dashboard/comprehensives" }) }),
                            React.createElement(List_1.ListItem, { primaryText: "Copy", containerElement: React.createElement(react_router_1.Link, { to: "/dashboard/copy" }) }),
                            React.createElement(List_1.ListItem, { primaryText: "Coupons", containerElement: React.createElement(react_router_1.Link, { to: "/dashboard/coupons" }) }),
                            React.createElement(List_1.ListItem, { primaryText: "Critiques", containerElement: React.createElement(react_router_1.Link, { to: "/dashboard/critiques" }) }),
                            React.createElement(List_1.ListItem, { primaryText: "Prices", containerElement: React.createElement(react_router_1.Link, { to: "/dashboard/prices" }) }),
                            React.createElement(List_1.ListItem, { primaryText: "Workshops", containerElement: React.createElement(react_router_1.Link, { to: "/dashboard/workshops" }) })))),
                React.createElement("div", { className: "pure-u-3-4" },
                    React.createElement("div", { className: "main" }, this.props.children)))));
    };
    return Admin;
}(React.Component));
Admin = __decorate([
    react_redux_1.connect(function (state) { return ({ admin: state.admin }); })
], Admin);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Admin;
//# sourceMappingURL=admin.js.map