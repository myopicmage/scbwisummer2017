"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var RegisterPage = (function (_super) {
    __extends(RegisterPage, _super);
    function RegisterPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegisterPage.prototype.render = function () {
        return (React.createElement("div", null,
            "I AM PAGE ",
            this.props.params.page));
    };
    return RegisterPage;
}(React.Component));
exports.RegisterPage = RegisterPage;
//# sourceMappingURL=registerpage.js.map