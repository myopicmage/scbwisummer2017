import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import Paper from 'material-ui/Paper';
import MemberSelect from './memberselect';
import BasicInfo from './basicinfo';

@connect(state => {
    return {
        regData: state.regData,
        registration: state.registration,
        user: state.user
    };
})
export default class Register extends React.Component<any, any> {
    constructor() {
        super();
    }

    renderPage = (page = '0') => {
        switch (page) {
            case '0':
                return <MemberSelect {...this.props} />;
            case '1':
                return <BasicInfo {...this.props} />;
        }
    }

    render() {
        return (
            <div className="pure-u-1">
                <Stepper activeStep={Number(this.props.params.page)}>
                    <Step>
                        <StepLabel>
                            Member
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                            Basic Information
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                            Track
                        </StepLabel>
                    </Step>
                    <Step disabled={this.props.user.member}>
                        <StepLabel>
                            Friday Comprehensive
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                            Critiques
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                            Verify
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                            Submit
                        </StepLabel>
                    </Step>
                </Stepper>
                <Paper zDepth={3} style={{ padding: '20px' }}>
                    {this.renderPage(this.props.params.page)}
                </Paper>
            </div>
        );
    }
}