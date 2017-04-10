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
var user_1 = require("../../redux/actions/user");
var registration_1 = require("../../redux/actions/registration");
var RaisedButton_1 = require("material-ui/RaisedButton");
var react_router_1 = require("react-router");
var MemberSelect = (function (_super) {
    __extends(MemberSelect, _super);
    function MemberSelect() {
        var _this = _super.call(this) || this;
        _this.handleMemberSet = function (isMember) {
            var dispatch = _this.props.dispatch;
            dispatch(user_1.setMember(isMember));
            dispatch(registration_1.seenMember());
        };
        return _this;
    }
    MemberSelect.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "pure-u-1" },
            React.createElement("div", { className: "pure-u-1" },
                React.createElement("h2", null, "Are you a member?")),
            React.createElement("div", { className: "pure-u-1-4" },
                React.createElement(RaisedButton_1.default, { label: "Yes", primary: true, style: { marginRight: 12 }, onTouchTap: function () { return _this.handleMemberSet(true); }, containerElement: React.createElement(react_router_1.Link, { to: '/register/1' }) }),
                React.createElement(RaisedButton_1.default, { label: "No", secondary: true, style: { marginLeft: 12 }, onTouchTap: function () { return _this.handleMemberSet(false); }, containerElement: React.createElement(react_router_1.Link, { to: '/register/1' }) }))));
    };
    return MemberSelect;
}(React.Component));
MemberSelect = __decorate([
    react_redux_1.connect(function (state) {
        return {
            regData: state.regData,
            registration: state.registration,
            user: state.user
        };
    })
], MemberSelect);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MemberSelect;
//# sourceMappingURL=memberselect.js.map