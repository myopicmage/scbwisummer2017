import * as React from 'react';
import { connect } from 'react-redux';
import { seenCritiques, setManuscriptCritiques, setPortfolioReviews } from '../../redux/actions/registration';
import { Link } from 'react-router';
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

@connect(state => {
    return {
        regData: state.regData,
        registration: state.registration
    };
})
export default class Critiques extends React.Component<any, any> {
    constructor() {
        super();
    }

    createMarkup = () => {
        return {
            __html: this.props.regData.copy.critique
        }
    }

    handleSelect = (event, value) => {
        const {dispatch} = this.props;
        
        switch (event.target.name) {
            case 'manuscript':
                dispatch(setManuscriptCritiques(value));
                break;
            case 'portfolio':
                dispatch(setPortfolioReviews(value));
                break;
        }
    }

    continue = () => {
        const {dispatch} = this.props;

        dispatch(seenCritiques());
    }

    render() {
        return (
            <div>
                <h1>Critiques</h1>
                <div dangerouslySetInnerHTML={this.createMarkup()} />
                <h4>Manuscript Critiques</h4>
                <div>
                    <RadioButtonGroup name="manuscript" defaultSelected={0} onChange={this.handleSelect}>
                        <RadioButton label="0 (+$0)" value={0} />
                        <RadioButton label="1 (+$50)" value={1} />
                        <RadioButton label="2 (+$100)" value={2} />
                        <RadioButton label="3 (+$150)" value={3} />
                        <RadioButton label="4 (+$200)" value={4} />
                    </RadioButtonGroup>
                </div>

                <h4>Portfolio Reviews</h4>
                <div>
                    <RadioButtonGroup name="portfolio" defaultSelected={0} onChange={this.handleSelect}>
                        <RadioButton label="0 (+$0)" value={0} />
                        <RadioButton label="1 (+$50)" value={1} />
                        <RadioButton label="2 (+$100)" value={2} />
                        <RadioButton label="3 (+$150)" value={3} />
                        <RadioButton label="4 (+$200)" value={4} />
                    </RadioButtonGroup>
                </div>

                <div style={{marginTop: '20px'}}>
                    <RaisedButton primary={true} label="Continue" onClick={this.continue} containerElement={<Link to='/register/5' />} />
                </div>
            </div>
        );
    }
}