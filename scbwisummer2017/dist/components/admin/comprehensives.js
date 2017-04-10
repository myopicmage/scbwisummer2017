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
var Comprehensives = (function (_super) {
    __extends(Comprehensives, _super);
    function Comprehensives() {
        var _this = _super.call(this) || this;
        _this.componentWillMount = function () {
            var dispatch = _this.props.dispatch;
            dispatch(admin_1.fetchComprehensives());
        };
        _this.handleChange = function (event, value) {
            var dispatch = _this.props.dispatch;
            dispatch(admin_1.makeComprehensive(__assign({}, _this.props.admin.tempcomprehensive, (_a = {}, _a[event.target.name] = value, _a))));
            var _a;
        };
        _this.save = function () {
            var dispatch = _this.props.dispatch;
            dispatch(admin_1.addComprehensive(_this.props.admin.tempcomprehensive));
        };
        _this.renderComprehensives = function () {
            return _this.props.admin.comprehensives.map(function (item, index) {
                return (React.createElement(Table_1.TableRow, { striped: index % 2 == 0, key: item.id },
                    React.createElement(Table_1.TableRowColumn, null, item.title),
                    React.createElement(Table_1.TableRowColumn, null, item.presenters),
                    React.createElement(Table_1.TableRowColumn, null, item.description),
                    React.createElement(Table_1.TableRowColumn, null, item.maxattendees),
                    React.createElement(Table_1.TableRowColumn, null, "0")));
            });
        };
        return _this;
    }
    Comprehensives.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Comprehensives"),
            React.createElement(Table_1.Table, { selectable: false },
                React.createElement(Table_1.TableHeader, null,
                    React.createElement(Table_1.TableRow, null,
                        React.createElement(Table_1.TableHeaderColumn, null, "Title"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Presenters"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Description"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Max Attendees"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Num Attendees"))),
                React.createElement(Table_1.TableBody, null,
                    this.renderComprehensives(),
                    React.createElement(Table_1.TableRow, null,
                        React.createElement(Table_1.TableRowColumn, null,
                            React.createElement(TextField_1.default, { name: "title", onChange: this.handleChange, hintText: "Title" })),
                        React.createElement(Table_1.TableRowColumn, null,
                            React.createElement(TextField_1.default, { name: "presenters", onChange: this.handleChange, hintText: "Presenters" })),
                        React.createElement(Table_1.TableRowColumn, null,
                            React.createElement(TextField_1.default, { name: "description", onChange: this.handleChange, hintText: "Description" })),
                        React.createElement(Table_1.TableRowColumn, null,
                            React.createElement(TextField_1.default, { name: "maxattendees", onChange: this.handleChange, hintText: "Max Attendees" })),
                        React.createElement(Table_1.TableRowColumn, null,
                            React.createElement(RaisedButton_1.default, { label: "Add", onClick: this.save, primary: true })))))));
    };
    return Comprehensives;
}(React.Component));
Comprehensives = __decorate([
    react_redux_1.connect(function (state) { return ({ admin: state.admin }); })
], Comprehensives);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Comprehensives;
//# sourceMappingURL=comprehensives.js.map