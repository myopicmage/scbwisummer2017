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
var Dashboard = (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        var _this = _super.call(this) || this;
        _this.componentWillMount = function () {
            var dispatch = _this.props.dispatch;
            dispatch(admin_1.fetchRegistrations());
        };
        _this.renderRegistrations = function () {
            return _this.props.admin.registrations.map(function (item, index) {
                return (React.createElement(Table_1.TableRow, { striped: index % 2 == 0 },
                    React.createElement(Table_1.TableRowColumn, null, item.Name),
                    React.createElement(Table_1.TableRowColumn, null, item.Comprehensive),
                    React.createElement(Table_1.TableRowColumn, null, item.Workshop),
                    React.createElement(Table_1.TableRowColumn, null, item.Manuscripts),
                    React.createElement(Table_1.TableRowColumn, null, item.Portfolios),
                    React.createElement(Table_1.TableRowColumn, null, item.Coupon),
                    React.createElement(Table_1.TableRowColumn, null, item.Subtotal),
                    React.createElement(Table_1.TableRowColumn, null, item.Total),
                    React.createElement(Table_1.TableRowColumn, null, item.Submitted)));
            });
        };
        return _this;
    }
    Dashboard.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "Latest Registrations"),
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
    return Dashboard;
}(React.Component));
Dashboard = __decorate([
    react_redux_1.connect(function (state) { return ({ admin: state.admin }); })
], Dashboard);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dashboard;
//# sourceMappingURL=dashboard.js.map