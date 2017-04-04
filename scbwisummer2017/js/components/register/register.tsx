import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Step, Stepper, StepLabel, StepButton } from 'material-ui/Stepper';
import Paper from 'material-ui/Paper';
import MemberSelect from './memberselect';
import BasicInfo from './basicinfo';
import Comprehensives from './comprehensives';
import Tracks from './tracks';
import Critiques from './critiques';
import Verify from './verify';
import Complete from './complete';

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

    componentWillMount = () => {
        const page = this.props.params.page || '0';

        const {seenbasic, seenmember, seentracks, seencritiques} = this.props.registration;

        if (!seenmember || !seenbasic || !seentracks || !seencritiques) {
            /*this.props.router.push({
                pathname: '/register'
            });*/
        }
    }

    renderPage = (page = '0') => {
        switch (page) {
            case '0':
                return <MemberSelect {...this.props} />;
            case '1':
                return <BasicInfo {...this.props} />;
            case '2':
                return <Comprehensives {...this.props} />;
            case '3':
                return <Tracks {...this.props} />;
            case '4':
                return <Critiques {...this.props} />;
            case '5':
                return <Verify {...this.props} />;
            case '6':
                return <Complete {...this.props} />;
        }
    }

    go = (page = 0) => {
        this.props.router.push({
            pathname: `/register/${page}`
        });
    }

    allowVerify = () => {
        let {seenmember, seenbasic, seentracks, seencritiques, track} = this.props.registration;
        let {valid} = this.props.user;

        return !(valid && seenmember && seenbasic && seentracks && seencritiques && (track !== -1));
    }

    render() {
        let pageToRender = this.renderPage(this.props.params.page);

        return (
            <div className="pure-u-1">
                <Paper zDepth={3}>
                    <Stepper linear={false} activeStep={Number(this.props.params.page)}>
                        <Step>
                            <StepButton onClick={() => this.go(0)}>
                                Member
                            </StepButton>
                        </Step>
                        <Step disabled={!this.props.registration.seenmember}>
                            <StepButton onClick={() => this.go(1)}>
                                Basic Information
                            </StepButton>
                        </Step>
                        <Step disabled={!this.props.user.member && !this.props.registration.seenbasic}>
                            <StepButton onClick={() => this.go(2)}>
                                Friday Comprehensive
                            </StepButton>
                        </Step>
                        <Step disabled={!this.props.registration.seenbasic}>
                            <StepButton onClick={() => this.go(3)}>
                                Track
                            </StepButton>
                        </Step>
                        <Step disabled={!this.props.registration.seentracks}>
                            <StepButton onClick={() => this.go(4)}>
                                Critiques
                            </StepButton>
                        </Step>
                        <Step disabled={this.allowVerify()}>
                            <StepButton onClick={() => this.go(5)}>
                                Verify
                            </StepButton>
                        </Step>
                        <Step>
                            <StepLabel>
                                Complete
                            </StepLabel>
                        </Step>
                    </Stepper>
                </Paper>
                <br />
                <Paper zDepth={3} style={{ padding: '20px' }}>
                    {pageToRender}
                </Paper>
            </div>
        );
    }
}