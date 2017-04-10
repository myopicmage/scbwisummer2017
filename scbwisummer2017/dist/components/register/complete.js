"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Complete = (function (_super) {
    __extends(Complete, _super);
    function Complete() {
        return _super.call(this) || this;
    }
    Complete.prototype.render = function () {
        return (React.createElement("div", null, "Congratulations! Your registration has been received!"));
    };
    return Complete;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Complete;
//# sourceMappingURL=complete.js.map