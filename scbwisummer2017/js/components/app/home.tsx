import * as React from "react";
import { Link } from "react-router";

export default class Home extends React.Component<any, any> {
    render() {
        return(
            <div className="pure-u-1">
                <h1>SCBWI Florida Orlando Conference June 2017 is here!</h1>
                <p>Late registration begins May 12, 2017, so get your registration in early.</p>
                <Link to="/register">Begin!</Link>
            </div>
        );
    }
}