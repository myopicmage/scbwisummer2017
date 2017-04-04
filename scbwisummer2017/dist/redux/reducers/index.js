"use strict";
var user_1 = require("./user");
var registration_1 = require("./registration");
var regData_1 = require("./regData");
var redux_1 = require("redux");
exports.reducers = redux_1.combineReducers({
    user: user_1.user,
    registration: registration_1.registration,
    regData: regData_1.regData
});
//# sourceMappingURL=index.js.map