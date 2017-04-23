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

import * as Register from './components/register';

import * as Admin from './components/admin';

injectTapEventPlugin();

render((
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="/register" component={Register.Register}>
                        <IndexRoute component={Register.MemberSelect} />
                        <Route path="/register/1" component={Register.BasicInfo} />
                        <Route path="/register/2" component={Register.Comprehensives} />
                        <Route path="/register/3" component={Register.Tracks} />
                        <Route path="/register/4" component={Register.Critiques} />
                        <Route path="/register/5" component={Register.Verify} />
                        <Route path="/register/6" component={Register.Complete} />
                    </Route>
                </Route>
                <Route path="/dashboard" component={Admin.Admin}>
                    <IndexRoute component={Admin.Dashboard} />
                    <Route path="/dashboard/registrations" component={Admin.RegistrationList} />
                    <Route path="/dashboard/add" component={Admin.Add} />
                    <Route path="/dashboard/prices" component={Admin.Prices} />
                    <Route path="/dashboard/comprehensives" component={Admin.Comprehensives} />
                    <Route path="/dashboard/copy" component={Admin.Copy} />
                    <Route path="/dashboard/critiques" component={Admin.Critiques} />
                    <Route path="/dashboard/workshops" component={Admin.Workshops} />
                    <Route path="/dashboard/coupons" component={Admin.Coupons} />
                </Route>
                <Route path="*" component={Error404} />
            </Router>
        </MuiThemeProvider>
    </Provider>
), document.getElementById("app"));