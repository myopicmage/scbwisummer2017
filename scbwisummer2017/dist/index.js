"use strict";
var React = require("react");
var react_dom_1 = require("react-dom");
var react_router_1 = require("react-router");
var react_redux_1 = require("react-redux");
var store_1 = require("./redux/store");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var darkBaseTheme_1 = require("material-ui/styles/baseThemes/darkBaseTheme");
var getMuiTheme_1 = require("material-ui/styles/getMuiTheme");
var injectTapEventPlugin = require("react-tap-event-plugin");
var app_1 = require("./components/app/app");
var home_1 = require("./components/app/home");
var error404_1 = require("./components/app/error404");
var register_1 = require("./components/register/register");
var registerpage_1 = require("./components/register/registerpage");
var admin_1 = require("./components/admin/admin");
var registrationlist_1 = require("./components/admin/registrationlist");
injectTapEventPlugin();
react_dom_1.render((React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(MuiThemeProvider_1.default, { muiTheme: getMuiTheme_1.default(darkBaseTheme_1.default) },
        React.createElement(react_router_1.Router, { history: react_router_1.browserHistory },
            React.createElement(react_router_1.Route, { path: "/", component: app_1.default },
                React.createElement(react_router_1.IndexRoute, { component: home_1.default }),
                React.createElement(react_router_1.Route, { path: "/register", component: register_1.default },
                    React.createElement(react_router_1.Route, { path: "/register/:page", component: registerpage_1.default }))),
            React.createElement(react_router_1.Route, { path: "/dashboard", component: admin_1.default },
                React.createElement(react_router_1.Route, { path: "/dashboard/registrations", component: registrationlist_1.default })),
            React.createElement(react_router_1.Route, { path: "*", component: error404_1.default }))))), document.getElementById("app"));
//# sourceMappingURL=index.js.map