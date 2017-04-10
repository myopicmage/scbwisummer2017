import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Step, Stepper, StepLabel, StepButton } from 'material-ui/Stepper';
import Paper from 'material-ui/Paper';

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
            this.props.router.push({
                pathname: '/register'
            });
        }
    }

    allowVerify = () => {
        let {seenmember, seenbasic, seentracks, seencritiques, track} = this.props.registration;
        let {valid} = this.props.user;

        return !(valid && seenmember && seenbasic && seentracks && seencritiques && (track !== -1));
    }

    render() {
        return (
            <div className="pure-u-1">
                <Paper zDepth={3}>
                    <Stepper linear={false} activeStep={Number(this.props.params.page)}>
                        <Step>
                            <StepButton containerElement={<Link to="/register" />}>
                                Member
                            </StepButton>
                        </Step>
                        <Step disabled={!this.props.registration.seenmember}>
                            <StepButton containerElement={<Link to="/register/1" />}>
                                Basic Information
                            </StepButton>
                        </Step>
                        <Step disabled={!this.props.user.member && !this.props.registration.seenbasic}>
                            <StepButton containerElement={<Link to="/register/2" />}>
                                Friday Comprehensive
                            </StepButton>
                        </Step>
                        <Step disabled={!this.props.registration.seenbasic}>
                            <StepButton containerElement={<Link to="/register/3" />}>
                                Track
                            </StepButton>
                        </Step>
                        <Step disabled={!this.props.registration.seentracks}>
                            <StepButton containerElement={<Link to="/register/4" />}>
                                Critiques
                            </StepButton>
                        </Step>
                        <Step disabled={this.allowVerify()}>
                            <StepButton containerElement={<Link to="/register/5" />}>
                                Verify
                            </StepButton>
                        </Step>
                        <Step disabled={true}>
                            <StepLabel>
                                Complete
                            </StepLabel>
                        </Step>
                    </Stepper>
                </Paper>
                <br />
                <Paper zDepth={3} style={{ padding: '20px' }}>
                    {this.props.children}
                </Paper>
            </div>
        );
    }
}