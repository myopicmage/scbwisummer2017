"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var user_1 = require("../../redux/actions/user");
var RaisedButton_1 = require("material-ui/RaisedButton");
var MemberSelect = (function (_super) {
    __extends(MemberSelect, _super);
    function MemberSelect() {
        var _this = _super.call(this) || this;
        _this.handleMemberSet = function (isMember) {
            var dispatch = _this.props.dispatch;
            dispatch(user_1.setMember(isMember));
            _this.props.router.push({
                pathname: '/register/1'
            });
        };
        return _this;
    }
    MemberSelect.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "pure-u-1" },
            React.createElement("div", { className: "pure-u-1" },
                React.createElement("h2", null, "Are you a member?")),
            React.createElement("div", { className: "pure-u-1-4" },
                React.createElement(RaisedButton_1.default, { label: "Yes", primary: true, style: { marginRight: 12 }, onTouchTap: function () { return _this.handleMemberSet(true); } }),
                React.createElement(RaisedButton_1.default, { label: "No", secondary: true, style: { marginLeft: 12 }, onTouchTap: function () { return _this.handleMemberSet(false); } }))));
    };
    return MemberSelect;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MemberSelect;
//# sourceMappingURL=memberselect.js.map