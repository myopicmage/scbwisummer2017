import * as React from "react";
import { render } from "react-dom";
import { Hello } from "./components/hello";
import { Home } from "./components/home";
import { Register } from "./components/register/register";
import { RegisterPage } from "./components/register/registerpage";
import { Admin } from "./components/admin/admin";
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';

export class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div style={{ "width": "10%", "float": "left" }}>
                    App text!
                </div>
                <div style={{ "float": "left"}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/hello" component={Hello} />
            <Route path="/register" component={Register}>
                <Route path="/register/:page" component={RegisterPage} />
            </Route>
            <Route path="admin" component={Admin} />
        </Route>
    </Router>
), document.getElementById("app"));