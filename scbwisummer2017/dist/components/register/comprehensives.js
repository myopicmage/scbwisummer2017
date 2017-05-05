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
var RadioButton_1 = require("material-ui/RadioButton");
var RaisedButton_1 = require("material-ui/RaisedButton");
var registration_1 = require("../../redux/actions/registration");
var react_router_1 = require("react-router");
var Comprehensives = (function (_super) {
    __extends(Comprehensives, _super);
    function Comprehensives() {
        var _this = _super.call(this) || this;
        _this.componentDidMount = function () {
            var dispatch = _this.props.dispatch;
        };
        _this.createMarkup = function () {
            return {
                __html: _this.props.regData.copy.comprehensive
            };
        };
        _this.handleSelect = function (event, value) {
            var dispatch = _this.props.dispatch;
            dispatch(registration_1.setComprehensive(value));
        };
        _this.makeList = function () {
            return _this.props.regData.comprehensives.map(function (item, index) {
                return (React.createElement(RadioButton_1.RadioButton, { value: item.id, label: item.title + " presented by " + item.presenters, key: item.id }));
            });
        };
        _this.continue = function () {
            var dispatch = _this.props.dispatch;
            dispatch(registration_1.seenComprehensives());
        };
        return _this;
    }
    Comprehensives.prototype.render = function () {
        return (React.createElement("div", { className: "pure-u-1" },
            React.createElement("h1", null, "Comprehensives"),
            React.createElement("div", { dangerouslySetInnerHTML: this.createMarkup() }),
            React.createElement("div", null,
                React.createElement(RadioButton_1.RadioButtonGroup, { name: "comprehensives", onChange: this.handleSelect }, this.makeList())),
            React.createElement("div", { style: { marginTop: '20px' } },
                React.createElement(RaisedButton_1.default, { label: "Continue", onClick: this.continue, primary: true, containerElement: React.createElement(react_router_1.Link, { to: "/register/3" }) }))));
    };
    return Comprehensives;
}(React.Component));
Comprehensives = __decorate([
    react_redux_1.connect(function (state) {
        return {
            regData: state.regData,
            registration: state.registration
        };
    })
], Comprehensives);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Comprehensives;
//# sourceMappingURL=comprehensives.js.map