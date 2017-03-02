import * as React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from "./components/app/app";
import { Home } from "./components/app/home";
import { Register } from "./components/register/register";
import { RegisterPage } from "./components/register/registerpage";
import { Admin } from "./components/admin/admin";


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
                <Route path="/admin" component={Admin} />
            </Router>
        </MuiThemeProvider>
    </Provider>
), document.getElementById("app"));