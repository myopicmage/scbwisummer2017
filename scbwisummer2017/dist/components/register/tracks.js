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
var react_router_1 = require("react-router");
var RaisedButton_1 = require("material-ui/RaisedButton");
var registration_1 = require("../../redux/actions/registration");
var Tracks = (function (_super) {
    __extends(Tracks, _super);
    function Tracks() {
        var _this = _super.call(this) || this;
        _this.createMarkup = function () {
            return {
                __html: _this.props.regData.copy.workshop
            };
        };
        _this.makeList = function () {
            return _this.props.regData.tracks.map(function (item, index) {
                return (React.createElement(RadioButton_1.RadioButton, { value: item.id, label: item.title + " presented by " + item.presenters, key: item.id }));
            });
        };
        _this.continue = function () {
            var dispatch = _this.props.dispatch;
            dispatch(registration_1.seenTracks());
        };
        _this.handleSelect = function (event, value) {
            var dispatch = _this.props.dispatch;
            dispatch(registration_1.setTrack(value));
        };
        return _this;
    }
    Tracks.prototype.render = function () {
        return (React.createElement("div", { className: "pure-u-1" },
            React.createElement("h1", null, "Workshops"),
            React.createElement("div", { dangerouslySetInnerHTML: this.createMarkup() }),
            React.createElement("div", null,
                React.createElement(RadioButton_1.RadioButtonGroup, { name: "comprehensives", onChange: this.handleSelect }, this.makeList())),
            React.createElement("div", { style: { marginTop: '20px' } },
                React.createElement(RaisedButton_1.default, { label: "Continue", onClick: this.continue, primary: true, containerElement: React.createElement(react_router_1.Link, { to: "/register/4" }) }))));
    };
    return Tracks;
}(React.Component));
Tracks = __decorate([
    react_redux_1.connect(function (state) {
        return {
            registration: state.registration,
            regData: state.regData
        };
    })
], Tracks);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tracks;
//# sourceMappingURL=tracks.js.map