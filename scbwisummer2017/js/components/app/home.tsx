import * as React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router";

@connect(state => ({ regData: state.regData }))
export default class Home extends React.Component<any, any> {
    constructor() {
        super();
    }

    createMarkup = () => {
        return {
            __html: this.props.regData.copy.frontpage
        };
    }

    render() {
        return(
            <div className="pure-u-1">
                <div dangerouslySetInnerHTML={this.createMarkup()} />
                <Link to="/register">Begin!</Link>
            </div>
        );
    }
}