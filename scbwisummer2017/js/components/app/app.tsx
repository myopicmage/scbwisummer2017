import * as React from "react";
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import RaisedButton from "material-ui/RaisedButton";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

@connect(state => ({regData: state.regData }))
export default class App extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <AppBar title="SCBWI Summer 2017" iconClassNameRight="muidocs-icon-navigation-expand-more" />
                <div className="main">
                    <div className="pure-g">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}