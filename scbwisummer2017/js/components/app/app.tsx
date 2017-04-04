import * as React from "react";
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import RaisedButton from "material-ui/RaisedButton";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import * as regDataActions from '../../redux/actions/regData';

@connect(state => ({regData: state.regData }))
export default class App extends React.Component<any, any> {
    constructor() {
        super();
    }

    componentDidMount() {
        const {dispatch} = this.props;

        dispatch(regDataActions.fetchComprehensives());
        dispatch(regDataActions.fetchTracks());
        dispatch(regDataActions.fetchCopy());
        dispatch(regDataActions.fetchPrices());
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