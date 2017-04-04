import * as React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

import App from "./components/app/app";
import Home from "./components/app/home";
import Error404 from "./components/app/error404";
import Register from "./components/register/register";
import RegisterPage from "./components/register/registerpage";
import Admin from "./components/admin/admin";
import RegistrationList from "./components/admin/registrationlist";

injectTapEventPlugin();

render((
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="/register" component={Register}>
                        <Route path="/register/:page" component={RegisterPage} />
                    </Route>
                </Route>
                <Route path="/dashboard" component={Admin}>
                    <Route path="/dashboard/registrations" component={RegistrationList} />
                </Route>
                <Route path="*" component={Error404} />
            </Router>
        </MuiThemeProvider>
    </Provider>
), document.getElementById("app"));