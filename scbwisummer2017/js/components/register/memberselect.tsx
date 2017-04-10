import * as React from 'react';
import { connect } from 'react-redux';
import { setMember } from '../../redux/actions/user';
import { seenMember } from '../../redux/actions/registration';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

@connect(state => {
    return {
        regData: state.regData,
        registration: state.registration,
        user: state.user
    };
})
export default class MemberSelect extends React.Component<any, any> {
    constructor() {
        super();
    }

    handleMemberSet = isMember => {
        const { dispatch } = this.props;

        dispatch(setMember(isMember));
        dispatch(seenMember());
    }

    render() {
        return (
            <div className="pure-u-1">
                <div className="pure-u-1">
                    <h2>
                        Are you a member?
                    </h2>
                </div>
                <div className="pure-u-1-4">
                    <RaisedButton
                        label="Yes"
                        primary={true}
                        style={{ marginRight: 12 }}
                        onTouchTap={() => this.handleMemberSet(true)}
                        containerElement={<Link to='/register/1' />}
                    />
                    <RaisedButton
                        label="No"
                        secondary={true}
                        style={{ marginLeft: 12 }}
                        onTouchTap={() => this.handleMemberSet(false)}
                        containerElement={<Link to='/register/1' />}
                    />
                </div>
            </div>
        );
    }
}