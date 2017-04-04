import * as React from 'react';
import { connect } from 'react-redux';

@connect(state => {
    return {
        registration: state.registration,
        regData: state.regData
    };
})
export default class Tracks extends React.Component<any, any> {
    constructor() {
        super();
    }

    createMarkup = () => {
        return {
            __html: this.props.regData.copy.workshop
        }
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={this.createMarkup()} />
        );
    }
}