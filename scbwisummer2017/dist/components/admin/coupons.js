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
var admin_1 = require("../../redux/actions/admin");
var TextField_1 = require("material-ui/TextField");
var RaisedButton_1 = require("material-ui/RaisedButton");
var SelectField_1 = require("material-ui/SelectField");
var MenuItem_1 = require("material-ui/MenuItem");
var Coupons = (function (_super) {
    __extends(Coupons, _super);
    function Coupons() {
        var _this = _super.call(this) || this;
        _this.componentWillMount = function () {
            var dispatch = _this.props.dispatch;
            dispatch(admin_1.fetchCoupons());
        };
        _this.handleChange = function (event, value) {
            _this.setState({
                coupon: __assign({}, _this.state.coupon, (_a = {}, _a[event.target.name] = value, _a))
            });
            var _a;
        };
        _this.handleSelect = function (event, value) {
            _this.setState({
                coupon: __assign({}, _this.state.coupon, { type: value })
            });
        };
        _this.save = function () {
            var dispatch = _this.props.dispatch;
            dispatch(admin_1.addCoupon(_this.state.coupon));
        };
        _this.renderCouponList = function () {
            return _this.props.admin.coupons.map(function (item, index) {
                var type = '';
                var value = item.value;
                switch (item.type) {
                    case 0:
                        type = 'Percent Off';
                        value = item.value + "%";
                        break;
                    case 2:
                        type = 'Total Cost';
                        value = "$" + item.value;
                        break;
                }
                return (React.createElement(Table_1.TableRow, { key: item.id },
                    React.createElement(Table_1.TableRowColumn, null, type),
                    React.createElement(Table_1.TableRowColumn, null, item.text),
                    React.createElement(Table_1.TableRowColumn, null, value)));
            });
        };
        _this.state = {
            coupon: {
                type: 2,
                text: '',
                value: ''
            }
        };
        return _this;
    }
    Coupons.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Coupons"),
            React.createElement(Table_1.Table, { selectable: false },
                React.createElement(Table_1.TableHeader, { adjustForCheckbox: false, displaySelectAll: false },
                    React.createElement(Table_1.TableRow, null,
                        React.createElement(Table_1.TableHeaderColumn, null, "Type"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Code"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Value"),
                        React.createElement(Table_1.TableHeaderColumn, null))),
                React.createElement(Table_1.TableBody, { stripedRows: true, displayRowCheckbox: false },
                    this.renderCouponList(),
                    React.createElement(Table_1.TableRow, null,
                        React.createElement(Table_1.TableRowColumn, null,
                            React.createElement(SelectField_1.default, { onChange: this.handleSelect, value: this.state.coupon.type, floatingLabelText: "Coupon Type" },
                                React.createElement(MenuItem_1.default, { value: 2, primaryText: "Total Cost" }),
                                React.createElement(MenuItem_1.default, { value: 0, primaryText: "Percent Off" }))),
                        React.createElement(Table_1.TableRowColumn, null,
                            React.createElement(TextField_1.default, { name: "text", onChange: this.handleChange, hintText: "Code", value: this.state.coupon.text })),
                        React.createElement(Table_1.TableRowColumn, null,
                            React.createElement(TextField_1.default, { name: "value", onChange: this.handleChange, hintText: "Value", value: this.state.coupon.value })),
                        React.createElement(Table_1.TableRowColumn, null,
                            React.createElement(RaisedButton_1.default, { primary: true, onClick: this.save, label: "Save" })))))));
    };
    return Coupons;
}(React.Component));
Coupons = __decorate([
    react_redux_1.connect(function (state) { return ({ admin: state.admin }); })
], Coupons);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Coupons;
//# sourceMappingURL=coupons.js.map