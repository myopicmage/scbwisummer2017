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
var admin_1 = require("../../redux/actions/admin");
var Divider_1 = require("material-ui/Divider");
var TextField_1 = require("material-ui/TextField");
var RaisedButton_1 = require("material-ui/RaisedButton");
var Copy = (function (_super) {
    __extends(Copy, _super);
    function Copy() {
        var _this = _super.call(this) || this;
        _this.componentWillMount = function () {
            var dispatch = _this.props.dispatch;
            dispatch(admin_1.fetchCopy());
        };
        _this.handleChange = function (event, value) {
            var dispatch = _this.props.dispatch;
            var copy = _this.props.admin.copy;
            copy[event.target.name] = value;
            dispatch(admin_1.setCopy(copy));
        };
        _this.save = function (item) {
            var dispatch = _this.props.dispatch;
            var _a = _this.props.admin.copy, frontpage = _a.frontpage, comprehensive = _a.comprehensive, workshop = _a.workshop, critique = _a.critique;
            switch (item) {
                case 'frontpage':
                    dispatch(admin_1.addCopy({ name: 'frontpage', text: frontpage }));
                    break;
                case 'comprehensive':
                    dispatch(admin_1.addCopy({ name: 'comprehensive', text: comprehensive }));
                    break;
                case 'workshop':
                    dispatch(admin_1.addCopy({ name: 'workshop', text: workshop }));
                    break;
                case 'critique':
                    dispatch(admin_1.addCopy({ name: 'critique', text: critique }));
                    break;
            }
        };
        return _this;
    }
    Copy.prototype.render = function () {
        return (React.createElement("div", { className: "pure-u-1" },
            React.createElement("h1", null, "Copy"),
            React.createElement(Divider_1.default, null),
            React.createElement("h3", null, "Front Page"),
            React.createElement(TextField_1.default, { hintText: "Front page copy", onChange: this.handleChange, name: "frontpage", value: this.props.admin.copy.frontpage, multiLine: true, style: { width: '100%' }, textareaStyle: { width: '100%' } }),
            React.createElement(RaisedButton_1.default, { label: "Save", primary: true, onClick: this.save }),
            React.createElement("h3", null, "Comprehensives"),
            React.createElement(TextField_1.default, { hintText: "Comprehensives page copy", onChange: this.handleChange, name: "comprehensive", value: this.props.admin.copy.comprehensive, multiLine: true, style: { width: '100%' }, textareaStyle: { width: '100%' } }),
            React.createElement(RaisedButton_1.default, { label: "Save", primary: true, onClick: this.save }),
            React.createElement("h3", null, "Workshops"),
            React.createElement(TextField_1.default, { hintText: "Workshops page copy", onChange: this.handleChange, name: "workshop", value: this.props.admin.copy.workshop, multiLine: true, style: { width: '100%' }, textareaStyle: { width: '100%' } }),
            React.createElement(RaisedButton_1.default, { label: "Save", primary: true, onClick: this.save }),
            React.createElement("h3", null, "Critiques"),
            React.createElement(TextField_1.default, { hintText: "Critiques page copy", onChange: this.handleChange, name: "critique", value: this.props.admin.copy.critique, multiLine: true, style: { width: '100%' }, textareaStyle: { width: '100%' } }),
            React.createElement(RaisedButton_1.default, { label: "Save", primary: true, onClick: this.save })));
    };
    return Copy;
}(React.Component));
Copy = __decorate([
    react_redux_1.connect(function (state) { return ({ admin: state.admin }); })
], Copy);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Copy;
//# sourceMappingURL=copy.js.map