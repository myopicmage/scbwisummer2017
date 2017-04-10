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
var admin_1 = require("../../redux/actions/admin");
var react_redux_1 = require("react-redux");
var Table_1 = require("material-ui/Table");
var RegistrationList = (function (_super) {
    __extends(RegistrationList, _super);
    function RegistrationList() {
        var _this = _super.call(this) || this;
        _this.componentWillMount = function () {
            var dispatch = _this.props.dispatch;
            dispatch(admin_1.fetchRegistrations(0));
        };
        _this.renderRegistrations = function () {
            return _this.props.admin.registrations.map(function (item, index) {
                return (React.createElement(Table_1.TableRow, { key: item.id },
                    React.createElement(Table_1.TableRowColumn, null,
                        item.user.firstname,
                        " ",
                        item.user.lastname),
                    React.createElement(Table_1.TableRowColumn, null, item.comprehensive ? item.comprehensive.title : "None"),
                    React.createElement(Table_1.TableRowColumn, null, item.workshop.title),
                    React.createElement(Table_1.TableRowColumn, null, item.manuscript),
                    React.createElement(Table_1.TableRowColumn, null, item.portfolio),
                    React.createElement(Table_1.TableRowColumn, null, item.coupon ? item.coupon.text : "None"),
                    React.createElement(Table_1.TableRowColumn, null, item.subtotal),
                    React.createElement(Table_1.TableRowColumn, null, item.total),
                    React.createElement(Table_1.TableRowColumn, null, item.submitted)));
            });
        };
        return _this;
    }
    RegistrationList.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "All Registrations"),
            React.createElement(Table_1.Table, null,
                React.createElement(Table_1.TableHeader, null,
                    React.createElement(Table_1.TableRow, null,
                        React.createElement(Table_1.TableHeaderColumn, null, "Name"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Comprehensive"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Workshop"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Manuscript Critiques"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Portfolio Reviews"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Coupon"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Subtotal"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Total"),
                        React.createElement(Table_1.TableHeaderColumn, null, "Submitted"))),
                React.createElement(Table_1.TableBody, null, this.renderRegistrations()))));
    };
    return RegistrationList;
}(React.Component));
RegistrationList = __decorate([
    react_redux_1.connect(function (state) { return ({ admin: state.admin }); })
], RegistrationList);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegistrationList;
//# sourceMappingURL=registrationlist.js.map