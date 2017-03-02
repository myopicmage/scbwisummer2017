import * as React from 'react';
import { Link } from 'react-router';

export class Register extends React.Component<undefined, undefined> {
    constructor() {
        super();
    }

    whatDo() {
        if (this.props.children) {
            return this.props.children;
        } else {
            return (
                <div>
                    <h1>BEGIN THE REGISTRATION</h1>
                    <Link to="/register/1">Go to page 1</Link><br />
                    <Link to="/register/2">Go to page 2</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.whatDo()}
            </div>
        );
    }
}