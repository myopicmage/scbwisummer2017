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
var RaisedButton_1 = require("material-ui/RaisedButton");
var TextField_1 = require("material-ui/TextField");
var SelectField_1 = require("material-ui/SelectField");
var MenuItem_1 = require("material-ui/MenuItem");
var admin_1 = require("../../redux/actions/admin");
var RadioButton_1 = require("material-ui/RadioButton");
var Add = (function (_super) {
    __extends(Add, _super);
    function Add() {
        var _this = _super.call(this) || this;
        _this.componentWillMount = function () {
            var dispatch = _this.props.dispatch;
            dispatch(admin_1.fetchComprehensives());
            dispatch(admin_1.fetchWorkshops());
        };
        _this.handleUserChange = function (event, value) {
            _this.setState({
                user: __assign({}, _this.state.user, (_a = {}, _a[event.target.name] = value, _a))
            });
            var _a;
        };
        _this.handleUserSelect = function (event, index, value) {
            _this.setState({
                user: __assign({}, _this.state.user, (_a = {}, _a[event.target.name] = value, _a))
            });
            var _a;
        };
        _this.handleRegSelect = function (event, value) {
            _this.setState({
                registration: __assign({}, _this.state.registration, (_a = {}, _a[event.target.name] = value, _a))
            });
            var _a;
        };
        _this.handleRegistrationChange = function (event, value) {
            _this.setState({
                registration: __assign({}, _this.state.registration, (_a = {}, _a[event.target.name] = value, _a))
            });
            var _a;
        };
        _this.submit = function () {
            var dispatch = _this.props.dispatch;
        };
        _this.makeComprehensiveList = function () {
            return _this.props.admin.comprehensives.map(function (item, index) {
                return (React.createElement(RadioButton_1.RadioButton, { value: item.id, label: item.title + " presented by " + item.presenters, key: item.id }));
            });
        };
        _this.makeTrackList = function () {
            return _this.props.admin.workshops.map(function (item, index) {
                return (React.createElement(RadioButton_1.RadioButton, { value: item.id, label: item.title + " presented by " + item.presenters, key: item.id }));
            });
        };
        _this.state = {
            user: {
                firstname: '',
                lastname: '',
                address1: '',
                address2: '',
                city: '',
                province: '',
                postal: '',
                email: '',
                phone: '',
                member: false,
                country: 'US',
            },
            registration: {
                track: -1,
                comprehensive: -1,
                manuscriptcritiques: 0,
                portfoliocritiques: 0,
            }
        };
        return _this;
    }
    Add.prototype.render = function () {
        return (React.createElement("div", { className: "pure-u-1" },
            React.createElement("h2", null, "Add a registration"),
            React.createElement("div", { className: "pure-u-1 pure-u-md-1-2" },
                React.createElement("h4", null, "Name"),
                React.createElement("div", { className: "pure-u-1 pure-u-md-1-2" },
                    React.createElement(TextField_1.default, { hintText: "First Name", onChange: this.handleUserChange, name: "firstname", value: this.state.user.firstname })),
                React.createElement("div", { className: "pure-u-1 pure-u-md-1-2" },
                    React.createElement(TextField_1.default, { hintText: "Last Name", onChange: this.handleUserChange, name: "lastname", value: this.state.user.lastname }))),
            React.createElement("br", null),
            React.createElement("div", { className: "pure-u-1 pure-u-md-1-2" },
                React.createElement("h4", null, "Address"),
                React.createElement("div", { className: "pure-u-1" },
                    React.createElement(TextField_1.default, { hintText: "Address 1", onChange: this.handleUserChange, name: "address1", value: this.state.user.address1 }),
                    React.createElement("br", null),
                    React.createElement(TextField_1.default, { hintText: "Address 2", onChange: this.handleUserChange, name: "address2", value: this.state.user.address2 }),
                    React.createElement("br", null),
                    React.createElement("div", { className: "pure-u-1 pure-u-md-1-3" },
                        React.createElement(TextField_1.default, { hintText: "City", onChange: this.handleUserChange, name: "city", value: this.state.user.city })),
                    React.createElement("div", { className: "pure-u-1 pure-u-md-1-3" },
                        React.createElement(TextField_1.default, { hintText: "State/Province", onChange: this.handleUserChange, name: "province", value: this.state.user.province })),
                    React.createElement("div", { className: "pure-u-1 pure-u-md-1-3" },
                        React.createElement(TextField_1.default, { hintText: "Zip/Postal", onChange: this.handleUserChange, name: "postalcode", value: this.state.user.postal })),
                    React.createElement("br", null),
                    React.createElement(SelectField_1.default, { floatingLabelText: "Country", onChange: this.handleUserSelect, value: this.state.user.country },
                        React.createElement(MenuItem_1.default, { value: "US", primaryText: "US" }),
                        React.createElement(MenuItem_1.default, { value: "Canada", primaryText: "Canada" })))),
            React.createElement("br", null),
            React.createElement("div", { className: "pure-u-1 pure-u-md-1-2" },
                React.createElement("h4", null, "Contact Information"),
                React.createElement(TextField_1.default, { hintText: "Phone", onChange: this.handleUserChange, name: "phone", value: this.state.user.phone }),
                React.createElement("br", null),
                React.createElement(TextField_1.default, { hintText: "Email", onChange: this.handleUserChange, name: "email", value: this.state.user.email })),
            React.createElement("div", null,
                React.createElement("h4", null, "Comprehensive"),
                React.createElement(RadioButton_1.RadioButtonGroup, { name: "comprehensive", onChange: this.handleRegSelect }, this.makeComprehensiveList())),
            React.createElement("div", null,
                React.createElement("h4", null, "Workshop"),
                React.createElement(RadioButton_1.RadioButtonGroup, { name: "track", onChange: this.handleRegSelect }, this.makeTrackList())),
            React.createElement("h4", null, "Manuscript Critiques"),
            React.createElement("div", null,
                React.createElement(RadioButton_1.RadioButtonGroup, { name: "manuscriptcritiques", defaultSelected: 0, onChange: this.handleRegSelect },
                    React.createElement(RadioButton_1.RadioButton, { label: "0 (+$0)", value: 0 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "1 (+$50)", value: 1 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "2 (+$100)", value: 2 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "3 (+$150)", value: 3 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "4 (+$200)", value: 4 }))),
            React.createElement("h4", null, "Portfolio Reviews"),
            React.createElement("div", null,
                React.createElement(RadioButton_1.RadioButtonGroup, { name: "portfoliocritiques", defaultSelected: 0, onChange: this.handleRegSelect },
                    React.createElement(RadioButton_1.RadioButton, { label: "0 (+$0)", value: 0 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "1 (+$50)", value: 1 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "2 (+$100)", value: 2 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "3 (+$150)", value: 3 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "4 (+$200)", value: 4 }))),
            React.createElement("div", { style: { marginTop: '20px' } },
                React.createElement(RaisedButton_1.default, { label: "Save", onClick: this.submit, primary: true }))));
    };
    return Add;
}(React.Component));
Add = __decorate([
    react_redux_1.connect(function (state) { return ({ admin: state.admin, regData: state.regData }); })
], Add);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Add;
//# sourceMappingURL=add.js.map