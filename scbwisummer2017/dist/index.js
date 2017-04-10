"use strict";
var React = require("react");
var react_dom_1 = require("react-dom");
var react_router_1 = require("react-router");
var react_redux_1 = require("react-redux");
var store_1 = require("./redux/store");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var injectTapEventPlugin = require("react-tap-event-plugin");
var app_1 = require("./components/app/app");
var home_1 = require("./components/app/home");
var error404_1 = require("./components/app/error404");
var Register = require("./components/register");
var Admin = require("./components/admin");
injectTapEventPlugin();
react_dom_1.render((React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(MuiThemeProvider_1.default, null,
        React.createElement(react_router_1.Router, { history: react_router_1.browserHistory },
            React.createElement(react_router_1.Route, { path: "/", component: app_1.default },
                React.createElement(react_router_1.IndexRoute, { component: home_1.default }),
                React.createElement(react_router_1.Route, { path: "/register", component: Register.Register },
                    React.createElement(react_router_1.IndexRoute, { component: Register.MemberSelect }),
                    React.createElement(react_router_1.Route, { path: "/register/1", component: Register.BasicInfo }),
                    React.createElement(react_router_1.Route, { path: "/register/2", component: Register.Comprehensives }),
                    React.createElement(react_router_1.Route, { path: "/register/3", component: Register.Tracks }),
                    React.createElement(react_router_1.Route, { path: "/register/4", component: Register.Critiques }),
                    React.createElement(react_router_1.Route, { path: "/register/5", component: Register.Verify }),
                    React.createElement(react_router_1.Route, { path: "/register/6", component: Register.Complete }))),
            React.createElement(react_router_1.Route, { path: "/dashboard", component: Admin.Admin },
                React.createElement(react_router_1.IndexRoute, { component: Admin.Dashboard }),
                React.createElement(react_router_1.Route, { path: "/dashboard/registrations", component: Admin.RegistrationList }),
                React.createElement(react_router_1.Route, { path: "/dashboard/prices", component: Admin.Prices }),
                React.createElement(react_router_1.Route, { path: "/dashboard/comprehensives", component: Admin.Comprehensives }),
                React.createElement(react_router_1.Route, { path: "/dashboard/copy", component: Admin.Copy }),
                React.createElement(react_router_1.Route, { path: "/dashboard/critiques", component: Admin.Critiques }),
                React.createElement(react_router_1.Route, { path: "/dashboard/workshops", component: Admin.Workshops })),
            React.createElement(react_router_1.Route, { path: "*", component: error404_1.default }))))), document.getElementById("app"));
//# sourceMappingURL=index.js.map