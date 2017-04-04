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
var memberselect_1 = require("./memberselect");
var basicinfo_1 = require("./basicinfo");
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
            }
        };
        return _this;
    }
    Register.prototype.render = function () {
        return (React.createElement("div", { className: "pure-u-1" },
            React.createElement(Stepper_1.Stepper, { activeStep: Number(this.props.params.page) },
                React.createElement(Stepper_1.Step, null,
                    React.createElement(Stepper_1.StepLabel, null, "Member")),
                React.createElement(Stepper_1.Step, null,
                    React.createElement(Stepper_1.StepLabel, null, "Basic Information")),
                React.createElement(Stepper_1.Step, null,
                    React.createElement(Stepper_1.StepLabel, null, "Track")),
                React.createElement(Stepper_1.Step, null,
                    React.createElement(Stepper_1.StepLabel, null, "Friday Comprehensive")),
                React.createElement(Stepper_1.Step, null,
                    React.createElement(Stepper_1.StepLabel, null, "Critiques")),
                React.createElement(Stepper_1.Step, null,
                    React.createElement(Stepper_1.StepLabel, null, "Verify")),
                React.createElement(Stepper_1.Step, null,
                    React.createElement(Stepper_1.StepLabel, null, "Submit"))),
            this.renderPage(this.props.params.page)));
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