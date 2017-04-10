import * as React from 'react';
import { connect } from 'react-redux';

@connect(state => ({ admin: state.admin }))
export default class Coupons extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        return (
            <div>why this</div>
        );
    }
}