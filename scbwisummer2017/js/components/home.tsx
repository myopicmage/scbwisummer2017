import * as React from "react";
import { Link } from "react-router";

export class Home extends React.Component<any, any> {
    render() {
        return(
            <div>
                I am text<br />
                <Link to="/register">Begin registration</Link><br />
                <Link to="/hello">HELLO</Link>
            </div>
        );
    }
}