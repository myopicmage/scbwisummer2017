import * as React from 'react';
import { connect } from 'react-redux';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import { setComprehensive, seenBasic, seenComprehensives } from '../../redux/actions/registration';
import { Link } from 'react-router';

@connect(state => {
    return {
        regData: state.regData,
        registration: state.registration
    };
})
export default class Comprehensives extends React.Component<any, any> {
    constructor() {
        super();
    }

    componentDidMount = () => {
        const {dispatch} = this.props;
    }

    createMarkup = () => {
        return {
            __html: this.props.regData.copy.comprehensive
        };
    }

    handleSelect = (event, value) => {
        const {dispatch} = this.props;

        dispatch(setComprehensive(value));
    }

    makeList = () => {
        return this.props.regData.comprehensives.map((item, index) => {
            return (
                <RadioButton value={item.id} label={`${item.title} presented by ${item.presenters}`} key={item.id} />
            );
        });
    }

    continue = () => {
        const {dispatch} = this.props;

        dispatch(seenComprehensives());
    }

    render() {
        return (
            <div className="pure-u-1">
                <h1>Comprehensives</h1>
                <div dangerouslySetInnerHTML={this.createMarkup()} />
                <div>
                    <RadioButtonGroup name="comprehensives" onChange={this.handleSelect}>
                        {this.makeList()}
                    </RadioButtonGroup>
                </div>
                <div style={{marginTop: '20px'}}>
                    <RaisedButton label="Continue" onClick={this.continue} primary={true} containerElement={<Link to="/register/3" />} />
                </div>
            </div>
        );
    }
}