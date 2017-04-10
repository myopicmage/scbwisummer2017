import * as React from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { IUser, IRegistration } from '../../redux/interfaces';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as braintree from 'braintree-web';
import { fetchToken } from '../../redux/actions/regData';
import { setNonce, calculateTotal, register, setCoupon, registerFree } from '../../redux/actions/registration';

@connect(state => {
    return {
        regData: state.regData,
        registration: state.registration as IRegistration,
        user: state.user as IUser
    };
})
export default class Verify extends React.Component<any, any> {
    constructor() {
        super();
        
        this.state = {
            ready: false
        };
    }

    componentWillMount = () => {
        const { dispatch } = this.props;

        dispatch(fetchToken());
        dispatch(calculateTotal(this.props.registration, this.props.user));
    }

    getComprehensive = () => {
        const { registration, regData } = this.props;

        let selected: any = {
            title: 'None Selected'
        };

        for (let r of regData.comprehensives) {
            if (r.id === registration.comprehensive) {
                selected = r;
            }
        }

        return selected.title;
    }

    getTrack = () => {
        const { registration, regData } = this.props;

        let selected: any = {
            title: 'None Selected'
        };

        for (let r of regData.tracks) {
            if (r.id === registration.track) {
                selected = r;
            }
        }

        return selected.title;
    }

    submitCoupon = () => {
        const { dispatch } = this.props;

        dispatch(calculateTotal(this.props.registration, this.props.user));
    }

    handleCoupon = (event, value) => {
        const { dispatch } = this.props;

        dispatch(setCoupon(value));
    }

    setupButton = () => {
        const ppbutton = document.getElementById('paypal-button');

        const { registration, dispatch, router, user } = this.props;

        if (registration.total == 0) {
            dispatch(registerFree(registration, user, () => {
                router.push({
                    pathname: '/register/6'
                });
            }));

            return;
        }

        braintree.client.create({ authorization: this.props.regData.paypaltoken }, (clientErr, clientInstance) => {
            braintree.paypal.create({ client: clientInstance }, (err, paypalInstance) => {
                ppbutton.addEventListener('click', () => {
                    paypalInstance.tokenize({
                        flow: 'checkout',
                        amount: registration.total,
                        currency: 'USD',
                        locale: 'en_US',
                    },
                    (err, tokenizationPayload) => {
                        dispatch(setNonce(tokenizationPayload.nonce));
                        dispatch(register({...registration, nonce: tokenizationPayload.nonce}, user,
                            () => {
                                router.push({
                                    pathname: '/register/6'
                                });
                            },
                            () => {
                                console.log('failure??');
                            })
                        );
                    });
                });
                this.setState({ready: true});
            });
        });
    }

    render() {
        const { user, registration } = this.props;

        return (
            <div className="pure-u-1">
                <h1>Verify your choices</h1>
                <div className="pure-u-1 pure-u-md-1-2">
                    <div>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableRowColumn>Name</TableRowColumn>
                                    <TableRowColumn>
                                        {user.firstname} {user.lastname}
                                    </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Address</TableRowColumn>
                                    <TableRowColumn>
                                        {user.address1}<br />
                                        {user.address2}<br />
                                        {user.city}, {user.province} {user.postal}<br />
                                        {user.country}
                                    </TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Member</TableRowColumn>
                                    <TableRowColumn>{user.member === true ? "Yes" : "No"}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Comprehensive</TableRowColumn>
                                    <TableRowColumn>{this.getComprehensive()}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Track</TableRowColumn>
                                    <TableRowColumn>{this.getTrack()}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Manuscript Critiques</TableRowColumn>
                                    <TableRowColumn>{registration.manuscriptcritiques}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Portfolio Reviews</TableRowColumn>
                                    <TableRowColumn>{registration.portfoliocritiques}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Subtotal</TableRowColumn>
                                    <TableRowColumn>${registration.subtotal}</TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div>
                        <h3>Do you have a coupon?</h3>
                        <TextField name="coupon" hintText="Enter it here" value={this.props.registration.coupon} onChange={this.handleCoupon} />
                        <RaisedButton label="Submit" secondary={true} onClick={this.submitCoupon} />
                    </div>
                    <div>
                        <h3>Total</h3>
                        <div>${registration.total}</div>
                    </div>
                    <div>
                        <h3>If you're sure, click here to go to paypal:</h3>
                            <RaisedButton label="I'm ready" onClick={this.setupButton} primary={true} style={{display: `${this.state.ready ? 'none' : 'block'}`}} /> 
                            <button
                                id="paypal-button"
                                data-merchant="braintree"
                                data-id="paypal-button"
                                data-button="checkout"
                                data-color="blue"
                                data-size="medium"
                                data-shape="pill"
                                data-button_type="submit"
                                data-button_disabled="false"
                                style={{display: `${this.state.ready ? 'block' : 'none'}`}}>
                                    Go
                                </button>
                    </div>
                </div>
            </div>
        );
    }
}