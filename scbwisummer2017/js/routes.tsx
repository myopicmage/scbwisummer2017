import { Route, IndexRoute } from 'react-router';
import * as React from 'react';

import App from "./components/app/app";
import Home from "./components/app/home";
import Error404 from "./components/app/error404";
import * as Register from './components/register';
import * as Admin from './components/admin';

export default <Route>
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
</Route>;

if (module.hot) {
    module.hot.accept();
}