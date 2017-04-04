"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require("react");
var react_redux_1 = require("react-redux");
var Stepper_1 = require("material-ui/Stepper");
var Paper_1 = require("material-ui/Paper");
var memberselect_1 = require("./memberselect");
var basicinfo_1 = require("./basicinfo");
var comprehensives_1 = require("./comprehensives");
var tracks_1 = require("./tracks");
var critiques_1 = require("./critiques");
var verify_1 = require("./verify");
var complete_1 = require("./complete");
var Register = (function (_super) {
    __extends(Register, _super);
    function Register() {
        var _this = _super.call(this) || this;
        _this.renderPage = function (page) {
            if (page === void 0) { page = '0'; }
            switch (page) {
                case '0':
                    return React.createElement(memberselect_1.default, __assign({}, _this.props));
                case '1':
                    return React.createElement(basicinfo_1.default, __assign({}, _this.props));
                case '2':
                    return React.createElement(comprehensives_1.default, __assign({}, _this.props));
                case '3':
                    return React.createElement(tracks_1.default, __assign({}, _this.props));
                case '4':
                    return React.createElement(critiques_1.default, __assign({}, _this.props));
                case '5':
                    return React.createElement(verify_1.default, __assign({}, _this.props));
                case '6':
                    return React.createElement(complete_1.default, __assign({}, _this.props));
            }
        };
        _this.go = function (page) {
            if (page === void 0) { page = 0; }
            _this.props.router.push({
                pathname: "/register/" + page
            });
        };
        _this.allowVerify = function () {
            var _a = _this.props.registration, seenmember = _a.seenmember, seenbasic = _a.seenbasic, seentracks = _a.seentracks, track = _a.track;
            var valid = _this.props.user.valid;
            return !(valid && seenmember && seenbasic && seentracks && (track !== -1));
        };
        return _this;
    }
    Register.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "pure-u-1" },
            React.createElement(Paper_1.default, { zDepth: 3 },
                React.createElement(Stepper_1.Stepper, { linear: false, activeStep: Number(this.props.params.page) },
                    React.createElement(Stepper_1.Step, null,
                        React.createElement(Stepper_1.StepButton, { onClick: function () { return _this.go(0); } }, "Member")),
                    React.createElement(Stepper_1.Step, { disabled: !this.props.registration.seenmember },
                        React.createElement(Stepper_1.StepButton, { onClick: function () { return _this.go(1); } }, "Basic Information")),
                    React.createElement(Stepper_1.Step, { disabled: !this.props.user.member && !this.props.registration.seenbasic },
                        React.createElement(Stepper_1.StepButton, { onClick: function () { return _this.go(2); } }, "Friday Comprehensive")),
                    React.createElement(Stepper_1.Step, { disabled: !this.props.registration.seenbasic },
                        React.createElement(Stepper_1.StepButton, { onClick: function () { return _this.go(3); } }, "Track")),
                    React.createElement(Stepper_1.Step, { disabled: !this.props.registration.seentracks },
                        React.createElement(Stepper_1.StepButton, { onClick: function () { return _this.go(4); } }, "Critiques")),
                    React.createElement(Stepper_1.Step, { disabled: this.allowVerify() },
                        React.createElement(Stepper_1.StepButton, { onClick: function () { return _this.go(5); } }, "Verify")),
                    React.createElement(Stepper_1.Step, null,
                        React.createElement(Stepper_1.StepLabel, null, "Complete")))),
            React.createElement("br", null),
            React.createElement(Paper_1.default, { zDepth: 3, style: { padding: '20px' } }, this.renderPage(this.props.params.page))));
    };
    return Register;
}(React.Component));
Register = __decorate([
    react_redux_1.connect(function (state) {
        return {
            regData: state.regData,
            registration: state.registration,
            user: state.user
        };
    })
], Register);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Register;
//# sourceMappingURL=register.js.map