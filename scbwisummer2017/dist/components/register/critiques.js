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
var registration_1 = require("../../redux/actions/registration");
var react_router_1 = require("react-router");
var RadioButton_1 = require("material-ui/RadioButton");
var RaisedButton_1 = require("material-ui/RaisedButton");
var Critiques = (function (_super) {
    __extends(Critiques, _super);
    function Critiques() {
        var _this = _super.call(this) || this;
        _this.createMarkup = function () {
            return {
                __html: _this.props.regData.copy.critique
            };
        };
        _this.handleSelect = function (event, value) {
            var dispatch = _this.props.dispatch;
            switch (event.target.name) {
                case 'manuscript':
                    dispatch(registration_1.setManuscriptCritiques(value));
                    break;
                case 'portfolio':
                    dispatch(registration_1.setPortfolioReviews(value));
                    break;
            }
        };
        _this.continue = function () {
            var dispatch = _this.props.dispatch;
            dispatch(registration_1.seenCritiques());
        };
        return _this;
    }
    Critiques.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Critiques"),
            React.createElement("div", { dangerouslySetInnerHTML: this.createMarkup() }),
            React.createElement("h4", null, "Manuscript Critiques"),
            React.createElement("div", null,
                React.createElement(RadioButton_1.RadioButtonGroup, { name: "manuscript", defaultSelected: 0, onChange: this.handleSelect },
                    React.createElement(RadioButton_1.RadioButton, { label: "0 (+$0)", value: 0 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "1 (+$50)", value: 1 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "2 (+$100)", value: 2 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "3 (+$150)", value: 3 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "4 (+$200)", value: 4 }))),
            React.createElement("h4", null, "Portfolio Reviews"),
            React.createElement("div", null,
                React.createElement(RadioButton_1.RadioButtonGroup, { name: "portfolio", defaultSelected: 0, onChange: this.handleSelect },
                    React.createElement(RadioButton_1.RadioButton, { label: "0 (+$0)", value: 0 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "1 (+$50)", value: 1 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "2 (+$100)", value: 2 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "3 (+$150)", value: 3 }),
                    React.createElement(RadioButton_1.RadioButton, { label: "4 (+$200)", value: 4 }))),
            React.createElement("div", { style: { marginTop: '20px' } },
                React.createElement(RaisedButton_1.default, { primary: true, label: "Continue", onClick: this.continue, containerElement: React.createElement(react_router_1.Link, { to: '/register/5' }) }))));
    };
    return Critiques;
}(React.Component));
Critiques = __decorate([
    react_redux_1.connect(function (state) {
        return {
            regData: state.regData,
            registration: state.registration
        };
    })
], Critiques);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Critiques;
//# sourceMappingURL=critiques.js.map