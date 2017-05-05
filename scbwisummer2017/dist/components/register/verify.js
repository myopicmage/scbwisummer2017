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
var Table_1 = require("material-ui/Table");
var TextField_1 = require("material-ui/TextField");
var RaisedButton_1 = require("material-ui/RaisedButton");
var braintree = require("braintree-web");
var regData_1 = require("../../redux/actions/regData");
var registration_1 = require("../../redux/actions/registration");
var Dialog_1 = require("material-ui/Dialog");
var Verify = (function (_super) {
    __extends(Verify, _super);
    function Verify() {
        var _this = _super.call(this) || this;
        _this.componentWillMount = function () {
            var dispatch = _this.props.dispatch;
            dispatch(regData_1.fetchToken(_this.setupButton));
            dispatch(registration_1.calculateTotal(_this.props.registration, _this.props.user));
        };
        _this.getComprehensive = function () {
            var _a = _this.props, registration = _a.registration, regData = _a.regData;
            var selected = {
                title: 'None Selected'
            };
            for (var _i = 0, _b = regData.comprehensives; _i < _b.length; _i++) {
                var r = _b[_i];
                if (r.id === registration.comprehensive) {
                    selected = r;
                }
            }
            return selected.title;
        };
        _this.getTrack = function () {
            var _a = _this.props, registration = _a.registration, regData = _a.regData;
            var selected = {
                title: 'None Selected'
            };
            for (var _i = 0, _b = regData.tracks; _i < _b.length; _i++) {
                var r = _b[_i];
                if (r.id === registration.track) {
                    selected = r;
                }
            }
            return selected.title;
        };
        _this.submitCoupon = function () {
            var dispatch = _this.props.dispatch;
            dispatch(registration_1.calculateTotal(_this.props.registration, _this.props.user));
        };
        _this.handleCoupon = function (event, value) {
            var dispatch = _this.props.dispatch;
            dispatch(registration_1.setCoupon(value));
        };
        _this.setupButton = function () {
            var ppbutton = document.getElementById('paypal-button');
            var _a = _this.props, registration = _a.registration, dispatch = _a.dispatch, router = _a.router, user = _a.user;
            braintree.client.create({ authorization: _this.props.regData.paypaltoken }, function (clientErr, clientInstance) {
                braintree.paypal.create({ client: clientInstance }, function (err, paypalInstance) {
                    ppbutton.addEventListener('click', function () {
                        if (registration.total == 0) {
                            dispatch(registration_1.registerFree(registration, user, function () {
                                router.push({
                                    pathname: '/register/6'
                                });
                            }));
                        }
                        _this.setState({ open: true });
                        paypalInstance.tokenize({
                            flow: 'checkout',
                            amount: registration.total,
                            currency: 'USD',
                            locale: 'en_US',
                        }, function (err, tokenizationPayload) {
                            _this.setState({ modalText: "PayPal response received. Processing..." });
                            dispatch(registration_1.setNonce(tokenizationPayload.nonce));
                            dispatch(registration_1.register(__assign({}, registration, { nonce: tokenizationPayload.nonce }), user, function () {
                                router.push({
                                    pathname: '/register/6'
                                });
                            }, function () {
                                console.log('failure??');
                            }));
                        });
                    });
                });
            });
        };
        _this.state = {
            open: false,
            modalText: "Please look for a paypal window if you don't see one. If you're on a phone, it may be in another tab."
        };
        return _this;
    }
    Verify.prototype.render = function () {
        var _a = this.props, user = _a.user, registration = _a.registration;
        var container = React.createElement("span", { id: "paypal-button", "data-merchant": "braintree", "data-id": "paypal-button", "data-button_type": "submit", "data-button_disabled": "false" });
        return (React.createElement("div", { className: "pure-u-1" },
            React.createElement("h1", null, "Verify your choices"),
            React.createElement("p", null, "If you'd like to make any changes, please click the step below."),
            React.createElement("div", { className: "pure-u-1 pure-u-md-1-2" },
                React.createElement("div", null,
                    React.createElement(Table_1.Table, { selectable: false },
                        React.createElement(Table_1.TableBody, { displayRowCheckbox: false },
                            React.createElement(Table_1.TableRow, null,
                                React.createElement(Table_1.TableRowColumn, null, "Name"),
                                React.createElement(Table_1.TableRowColumn, null,
                                    user.firstname,
                                    " ",
                                    user.lastname)),
                            React.createElement(Table_1.TableRow, null,
                                React.createElement(Table_1.TableRowColumn, null, "Address"),
                                React.createElement(Table_1.TableRowColumn, null,
                                    user.address1,
                                    React.createElement("br", null),
                                    user.address2,
                                    React.createElement("br", null),
                                    user.city,
                                    ", ",
                                    user.province,
                                    " ",
                                    user.postal,
                                    React.createElement("br", null),
                                    user.country)),
                            React.createElement(Table_1.TableRow, null,
                                React.createElement(Table_1.TableRowColumn, null, "Member"),
                                React.createElement(Table_1.TableRowColumn, null, user.member === true ? "Yes" : "No")),
                            React.createElement(Table_1.TableRow, null,
                                React.createElement(Table_1.TableRowColumn, null, "Comprehensive"),
                                React.createElement(Table_1.TableRowColumn, null, this.getComprehensive())),
                            React.createElement(Table_1.TableRow, null,
                                React.createElement(Table_1.TableRowColumn, null, "Track"),
                                React.createElement(Table_1.TableRowColumn, null, this.getTrack())),
                            React.createElement(Table_1.TableRow, null,
                                React.createElement(Table_1.TableRowColumn, null, "Manuscript Critiques"),
                                React.createElement(Table_1.TableRowColumn, null, registration.manuscriptcritiques)),
                            React.createElement(Table_1.TableRow, null,
                                React.createElement(Table_1.TableRowColumn, null, "Portfolio Reviews"),
                                React.createElement(Table_1.TableRowColumn, null, registration.portfoliocritiques)),
                            React.createElement(Table_1.TableRow, null,
                                React.createElement(Table_1.TableRowColumn, null, "Subtotal"),
                                React.createElement(Table_1.TableRowColumn, null,
                                    "$",
                                    registration.subtotal)),
                            React.createElement(Table_1.TableRow, null,
                                React.createElement(Table_1.TableRowColumn, null,
                                    React.createElement("b", null, "Do you have a coupon?")),
                                React.createElement(Table_1.TableRowColumn, null,
                                    React.createElement("div", { className: "pure-u-2-3" },
                                        React.createElement(TextField_1.default, { name: "coupon", hintText: "Enter it here", value: this.props.registration.coupon, onChange: this.handleCoupon, fullWidth: true })),
                                    React.createElement("div", { className: "pure-u-1-3" },
                                        React.createElement(RaisedButton_1.default, { label: "Verify", secondary: true, onClick: this.submitCoupon, style: { float: 'right' } }))))))),
                React.createElement("div", null,
                    React.createElement("h3", null, "Total"),
                    React.createElement("div", null,
                        "$",
                        registration.total)),
                React.createElement("div", null,
                    React.createElement("h3", null, "If you're sure, click here to submit:"),
                    React.createElement("div", { className: "pure-u-1 pure-u-md-1-4" },
                        React.createElement(RaisedButton_1.default, { label: "Submit to PayPal", primary: true, containerElement: container })))),
            React.createElement(Dialog_1.default, { open: this.state.open, title: this.state.modalText, modal: true, actions: [] })));
    };
    return Verify;
}(React.Component));
Verify = __decorate([
    react_redux_1.connect(function (state) {
        return {
            regData: state.regData,
            registration: state.registration,
            user: state.user
        };
    })
], Verify);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Verify;
//# sourceMappingURL=verify.js.map