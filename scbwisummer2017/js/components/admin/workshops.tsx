import * as React from 'react';
import { connect } from 'react-redux';

@connect(state => ({ admin: state.admin }))
export default class Workshops extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Workshops</h1>
            </div>
        );
    }
}