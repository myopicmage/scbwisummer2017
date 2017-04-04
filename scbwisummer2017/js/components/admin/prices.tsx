import * as React from 'react';
import { connect } from 'react-redux';

@connect(state => {
    return {
        regData: state.regData
    };
})
export default class Prices extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        return (
            <div>i'm a list</div>
        );
    }
}