import * as React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router";
import { List, ListItem } from 'material-ui/List';
import AppBar from "material-ui/AppBar";
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import Home from 'material-ui/svg-icons/action/home';
import * as $ from 'jquery';

@connect(state => ({ admin: state.admin }))
export default class Admin extends React.Component<any, any> {
    constructor() {
        super();
    }

    componentWillUpdate = () => {
        let loggedin = $('#isloggedin');

        if (loggedin.val() !== "True") {
            window.location.href = '/account/login';
        }
    }

    render() {
        return (
            <div>
                <AppBar title="SCBWI Summer 2017 Admin" iconClassNameRight="muidocs-icon-navigation-expand-more" />
                <div className="pure-g">
                    <div className="pure-u-1-4">
                        <Paper zDepth={3}>
                            <List>
                                <Subheader>Tools</Subheader>
                                <ListItem primaryText="Home" leftIcon={<Home />} containerElement={<Link to="/dashboard" />} />
                                <a href="/admin/getcsv" style={{ textDecoration: 'none' }}>
                                    <ListItem primaryText="Download Spreadsheet" leftIcon={<FileFileDownload />} />
                                </a>
                                <Divider />
                                <Subheader>Registrations</Subheader>
                                <ListItem primaryText="Add" containerElement={<Link to="/dashboard/add" />} />
                                <ListItem primaryText="View" containerElement={<Link to="/dashboard/registrations" />} />
                                <Divider />
                                <Subheader>Settings</Subheader>
                                <ListItem primaryText="Comprehensives" containerElement={<Link to="/dashboard/comprehensives" />} />
                                <ListItem primaryText="Copy" containerElement={<Link to="/dashboard/copy" />} />
                                <ListItem primaryText="Coupons" containerElement={<Link to="/dashboard/coupons" />} />
                                <ListItem primaryText="Critiques" containerElement={<Link to="/dashboard/critiques" />} />
                                <ListItem primaryText="Prices" containerElement={<Link to="/dashboard/prices" />} />
                                <ListItem primaryText="Workshops" containerElement={<Link to="/dashboard/workshops" />} />
                            </List>
                        </Paper>
                    </div>
                    <div className="pure-u-3-4">
                        <div className="main">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}