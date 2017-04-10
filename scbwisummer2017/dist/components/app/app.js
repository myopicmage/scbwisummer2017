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
var AppBar_1 = require("material-ui/AppBar");
var regDataActions = require("../../redux/actions/regData");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super.call(this) || this;
    }
    App.prototype.componentDidMount = function () {
        var dispatch = this.props.dispatch;
        dispatch(regDataActions.fetchComprehensives());
        dispatch(regDataActions.fetchTracks());
        dispatch(regDataActions.fetchCopy());
        dispatch(regDataActions.fetchPrices());
    };
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(AppBar_1.default, { title: "SCBWI Summer 2017", iconClassNameRight: "muidocs-icon-navigation-expand-more" }),
            React.createElement("div", { className: "main" },
                React.createElement("div", { className: "pure-g" }, this.props.children))));
    };
    return App;
}(React.Component));
App = __decorate([
    react_redux_1.connect(function (state) { return ({ regData: state.regData }); })
], App);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
//# sourceMappingURL=app.js.map