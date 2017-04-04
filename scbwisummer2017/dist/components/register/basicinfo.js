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
var user = require("../../redux/actions/user");
var TextField_1 = require("material-ui/TextField");
var RaisedButton_1 = require("material-ui/RaisedButton");
var BasicInfo = (function (_super) {
    __extends(BasicInfo, _super);
    function BasicInfo() {
        var _this = _super.call(this) || this;
        _this.handleChange = function (event, value) {
            var dispatch = _this.props.dispatch;
            switch (event.target.name) {
                case 'firstname':
                    dispatch(user.addFirstName(value));
                    break;
                case 'lastname':
                    dispatch(user.addLastName(value));
                    break;
                case 'address1':
                    dispatch(user.addAddress(value));
                    break;
                case 'address2':
                    dispatch(user.addAddress2(value));
                    break;
                case 'city':
                    dispatch(user.addCity(value));
                    break;
                case 'province':
                    dispatch(user.addProvince(value));
                    break;
                case 'postalcode':
                    dispatch(user.addPostalCode(value));
                    break;
                case 'email':
                    dispatch(user.addEmail(value));
                    break;
                case 'phone':
                    dispatch(user.addPhone(value));
                    break;
                default:
                    break;
            }
        };
        _this.continue = function () {
            _this.props.router.push({
                pathname: '/register/2'
            });
        };
        return _this;
    }
    BasicInfo.prototype.render = function () {
        return (React.createElement("div", { className: "pure-u-1" },
            React.createElement("h2", null, "Let's get some basic information"),
            React.createElement("div", { className: "pure-u-1-2" },
                React.createElement("h4", null, "Name"),
                React.createElement("div", { className: "pure-u-1-2" },
                    React.createElement(TextField_1.default, { hintText: "First Name", onChange: this.handleChange, name: "firstname", value: this.props.user.firstname })),
                React.createElement("div", { className: "pure-u-1-2" },
                    React.createElement(TextField_1.default, { hintText: "Last Name", onChange: this.handleChange, name: "lastname", value: this.props.user.lastname }))),
            React.createElement("br", null),
            React.createElement("div", { className: "pure-u-1-2" },
                React.createElement("h4", null, "Address"),
                React.createElement("div", { className: "pure-u-1" },
                    React.createElement(TextField_1.default, { hintText: "Address 1", onChange: this.handleChange, name: "address1", value: this.props.user.address1 }),
                    React.createElement("br", null),
                    React.createElement(TextField_1.default, { hintText: "Address 2", onChange: this.handleChange, name: "address2", value: this.props.user.address2 }),
                    React.createElement("br", null),
                    React.createElement("div", { className: "pure-u-1-3" },
                        React.createElement(TextField_1.default, { hintText: "City", onChange: this.handleChange, name: "city", value: this.props.user.city })),
                    React.createElement("div", { className: "pure-u-1-3" },
                        React.createElement(TextField_1.default, { hintText: "State/Province", onChange: this.handleChange, name: "province", value: this.props.user.province })),
                    React.createElement("div", { className: "pure-u-1-3" },
                        React.createElement(TextField_1.default, { hintText: "Zip/Postal", onChange: this.handleChange, name: "postalcode", value: this.props.user.postal })))),
            React.createElement("br", null),
            React.createElement("div", { className: "pure-u-1-2" },
                React.createElement("h4", null, "Contact Information"),
                React.createElement(TextField_1.default, { hintText: "Phone", onChange: this.handleChange, name: "phone", value: this.props.user.phone }),
                React.createElement("br", null),
                React.createElement(TextField_1.default, { hintText: "Email", onChange: this.handleChange, name: "email", value: this.props.user.email })),
            React.createElement("br", null),
            React.createElement("div", { className: "pure-u-1-2", style: { marginTop: '20px' } },
                React.createElement(RaisedButton_1.default, { label: "Continue", primary: true, onTouchTap: this.continue }))));
    };
    return BasicInfo;
}(React.Component));
BasicInfo = __decorate([
    react_redux_1.connect(function (state) { return ({ user: state.user }); })
], BasicInfo);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BasicInfo;
//# sourceMappingURL=basicinfo.js.map