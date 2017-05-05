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
var admin_1 = require("../../redux/actions/admin");
var Table_1 = require("material-ui/Table");
var TextField_1 = require("material-ui/TextField");
var RaisedButton_1 = require("material-ui/RaisedButton");
var Checkbox_1 = require("material-ui/Checkbox");
var Prices = (function (_super) {
    __extends(Prices, _super);
    function Prices() {
        var _this = _super.call(this) || this;
        _this.componentWillMount = function () {
            var dispatch = _this.props.dispatch;
            dispatch(admin_1.fetchPrices());
        };
        _this.handleChange = function (event, value) {
            var dispatch = _this.props.dispatch;
            dispatch(admin_1.makePrice(__assign({}, _this.props.admin.tempprice, (_a = {}, _a[event.target.name] = value, _a))));
            var _a;
        };
        _this.save = function () {
            var dispatch = _this.props.dispatch;
            dispatch(admin_1.addPrice(_this.props.admin.tempprice));
        };
        _this.renderPricesList = function () {
            return _this.props.admin.prices.map(function (item, index) {
                return (React.createElement(Table_1.TableRow, { key: item.id },
                    React.createElement(Table_1.TableRowColumn, null, item.type),
                    React.createElement(Table_1.TableRowColumn, null, item.late === true ? "Yes" : "No"),
                    React.createElement(Table_1.TableRowColumn, null, item.member === true ? "Yes" : "No"),
                    React.createElement(Table_1.TableRowColumn, null,
                        "$",
                        item.value)));
            });
        };
        return _this;
    }
    Prices.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Prices"),
            React.createElement(Table_1.Table, { selectable: false },
                React.createElement(Table_1.TableHeader, null,
                    React.createElement(Table_1.TableRow, null,
                        React.createElement(Table_1.TableHeaderColumn, null, "Type"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Late Price"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Member"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Value"))),
                React.createElement(Table_1.TableBody, { stripedRows: true },
                    this.renderPricesList(),
                    React.createElement(Table_1.TableRow, null,
                        React.createElement(Table_1.TableRowColumn, null,
                            React.createElement(TextField_1.default, { name: "type", onChange: this.handleChange, hintText: "Type" })),
                        React.createElement(Table_1.TableRowColumn, null,
                            React.createElement(Checkbox_1.default, { name: "late", onCheck: this.handleChange, label: "Late" })),
                        React.createElement(Table_1.TableRowColumn, null,
                            React.createElement(Checkbox_1.default, { name: "member", onCheck: this.handleChange, label: "Member" })),
                        React.createElement(Table_1.TableRowColumn, null,
                            React.createElement(TextField_1.default, { name: "value", onChange: this.handleChange, hintText: "Value" })),
                        React.createElement(Table_1.TableRowColumn, null,
                            React.createElement(RaisedButton_1.default, { label: "Add", onClick: this.save, primary: true })))))));
    };
    return Prices;
}(React.Component));
Prices = __decorate([
    react_redux_1.connect(function (state) { return ({ admin: state.admin }); })
], Prices);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Prices;
//# sourceMappingURL=prices.js.map