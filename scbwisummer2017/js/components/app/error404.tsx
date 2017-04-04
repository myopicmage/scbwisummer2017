import * as React from 'react';
import { Link } from 'react-router';

export default class Error404 extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>
                    Looks like you're a little lost! This page can't be found.
                </div>
                <div>
                    Want to go <Link to="/">home</Link>?
                </div>
            </div>
        );
    }
}