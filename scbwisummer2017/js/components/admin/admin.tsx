import * as React from "react";
import { Link } from "react-router";
import AppBar from "material-ui/AppBar";

export default class Admin extends React.Component<any, any> {
    render() {
        return (
            <div>
                <AppBar title="SCBWI Summer 2017 Admin" iconClassNameRight="muidocs-icon-navigation-expand-more" />
                <Link to="/">Home</Link>
            </div>
        );
    }
}