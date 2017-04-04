import * as React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router";
import AppBar from "material-ui/AppBar";

@connect(state => {
    return {
        regData: state.regData
    };
})
export default class Admin extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <AppBar title="SCBWI Summer 2017 Admin" iconClassNameRight="muidocs-icon-navigation-expand-more" />
                <Link to="/">Home</Link>
            </div>
        );
    }
}