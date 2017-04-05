import * as React from 'react';
import { connect } from 'react-redux';

@connect(state => ({ admin: state.admin }))
export default class Critiques extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Critiques</h1>
            </div>
        );
    }
}