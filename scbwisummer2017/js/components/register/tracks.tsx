import * as React from 'react';
import { connect } from 'react-redux';
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { setTrack, seenTracks } from '../../redux/actions/registration';

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

    makeList = () => {
        return this.props.regData.tracks.map((item, index) => {
            return (
                <RadioButton value={item.id} label={`${item.title} presented by ${item.presenters}`} key={item.id} />
            );
        });
    }

    continue = () => {
        const {dispatch} = this.props;

        dispatch(seenTracks());
    }

    handleSelect = (event, value) => {
        const {dispatch} = this.props;

        dispatch(setTrack(value));
    }

    render() {
        return (
            <div className="pure-u-1">
                <h1>Workshops</h1>
                <div dangerouslySetInnerHTML={this.createMarkup()} />
                <div>
                    <RadioButtonGroup name="comprehensives" onChange={this.handleSelect}>
                        {this.makeList()}
                    </RadioButtonGroup>
                </div>
                <div style={{marginTop: '20px'}}>
                    <RaisedButton label="Continue" onClick={this.continue} primary={true} containerElement={<Link to="/register/4" />} />
                </div>
            </div>
        );
    }
}