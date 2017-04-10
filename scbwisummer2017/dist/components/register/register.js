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
var Stepper_1 = require("material-ui/Stepper");
var Paper_1 = require("material-ui/Paper");
var Register = (function (_super) {
    __extends(Register, _super);
    function Register() {
        var _this = _super.call(this) || this;
        _this.componentWillMount = function () {
            var page = _this.props.params.page || '0';
            var _a = _this.props.registration, seenbasic = _a.seenbasic, seenmember = _a.seenmember, seentracks = _a.seentracks, seencritiques = _a.seencritiques;
            if (!seenmember || !seenbasic || !seentracks || !seencritiques) {
            }
        };
        _this.allowVerify = function () {
            var _a = _this.props.registration, seenmember = _a.seenmember, seenbasic = _a.seenbasic, seentracks = _a.seentracks, seencritiques = _a.seencritiques, track = _a.track;
            var valid = _this.props.user.valid;
            return !(valid && seenmember && seenbasic && seentracks && seencritiques && (track !== -1));
        };
        return _this;
    }
    Register.prototype.render = function () {
        return (React.createElement("div", { className: "pure-u-1" },
            React.createElement(Paper_1.default, { zDepth: 3 },
                React.createElement(Stepper_1.Stepper, { linear: false, activeStep: Number(this.props.params.page) },
                    React.createElement(Stepper_1.Step, null,
                        React.createElement(Stepper_1.StepButton, { containerElement: React.createElement(react_router_1.Link, { to: "/register" }) }, "Member")),
                    React.createElement(Stepper_1.Step, { disabled: !this.props.registration.seenmember },
                        React.createElement(Stepper_1.StepButton, { containerElement: React.createElement(react_router_1.Link, { to: "/register/1" }) }, "Basic Information")),
                    React.createElement(Stepper_1.Step, { disabled: !this.props.user.member && !this.props.registration.seenbasic },
                        React.createElement(Stepper_1.StepButton, { containerElement: React.createElement(react_router_1.Link, { to: "/register/2" }) }, "Friday Comprehensive")),
                    React.createElement(Stepper_1.Step, { disabled: !this.props.registration.seenbasic },
                        React.createElement(Stepper_1.StepButton, { containerElement: React.createElement(react_router_1.Link, { to: "/register/3" }) }, "Track")),
                    React.createElement(Stepper_1.Step, { disabled: !this.props.registration.seentracks },
                        React.createElement(Stepper_1.StepButton, { containerElement: React.createElement(react_router_1.Link, { to: "/register/4" }) }, "Critiques")),
                    React.createElement(Stepper_1.Step, { disabled: this.allowVerify() },
                        React.createElement(Stepper_1.StepButton, { containerElement: React.createElement(react_router_1.Link, { to: "/register/5" }) }, "Verify")),
                    React.createElement(Stepper_1.Step, { disabled: true },
                        React.createElement(Stepper_1.StepLabel, null, "Complete")))),
            React.createElement("br", null),
            React.createElement(Paper_1.default, { zDepth: 3, style: { padding: '20px' } }, this.props.children)));
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