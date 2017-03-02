import * as React from "react";
import { Link } from "react-router";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from 'material-ui/AppBar';

export class Home extends React.Component<any, any> {
    render() {
        return(
            <div>
                <AppBar title="SCBWI Summer 2017" iconClassNameRight="muidocs-icon-navigation-expand-more" />
                <Link to="/admin">admin</Link>
            </div>
        );
    }
}