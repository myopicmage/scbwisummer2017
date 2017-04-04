import * as React from 'react';
import { connect } from 'react-redux';
import * as user from '../../redux/actions/user';
import { seenBasic } from '../../redux/actions/registration';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

@connect(state => ({ user: state.user }))
export default class BasicInfo extends React.Component<any, any> {
    constructor() {
        super();
    }

    handleChange = (event, value) => {
        const {dispatch} = this.props;

        switch (event.target.name) {
            case 'firstname':
                dispatch(user.addFirstName(value));
                break;
            case 'lastname':
                dispatch(user.addLastName(value));
                break;
            case 'address1':
                dispatch(user.addAddress(value));
                break;
            case 'address2':
                dispatch(user.addAddress2(value));
                break;
            case 'city':
                dispatch(user.addCity(value));
                break;
            case 'province':
                dispatch(user.addProvince(value));
                break;
            case 'postalcode':
                dispatch(user.addPostalCode(value));
                break;
            case 'email':
                dispatch(user.addEmail(value));
                break;
            case 'phone':
                dispatch(user.addPhone(value));
                break;
            case 'country':
                dispatch(user.addCountry(value));
                break;
            default:
                break;
        }
    }

    handleSelect = (event, index, value) => {
        const {dispatch} = this.props;

        dispatch(user.addCountry(value));
    }

    continue = () => {
        const {dispatch} = this.props;

        dispatch(seenBasic());

        this.props.router.push({
            pathname: '/register/2'
        });
    }

    render() {
        return (
            <div className="pure-u-1">
                <h2>Let's get some basic information</h2>
                <div className="pure-u-1-2">
                    <h4>Name</h4>
                    <div className="pure-u-1-2">
                        <TextField hintText="First Name" onChange={this.handleChange} name="firstname" value={this.props.user.firstname} />
                    </div>
                    <div className="pure-u-1-2">
                        <TextField hintText="Last Name" onChange={this.handleChange} name="lastname" value={this.props.user.lastname} />
                    </div>
                </div>
                <br />
                <div className="pure-u-1-2">
                    <h4>Address</h4>
                    <div className="pure-u-1">
                        <TextField hintText="Address 1" onChange={this.handleChange} name="address1" value={this.props.user.address1} />
                        <br />
                        <TextField hintText="Address 2" onChange={this.handleChange} name="address2" value={this.props.user.address2} />
                        <br />
                        <div className="pure-u-1-3">
                            <TextField hintText="City" onChange={this.handleChange} name="city" value={this.props.user.city} />
                        </div>
                        <div className="pure-u-1-3">
                            <TextField hintText="State/Province" onChange={this.handleChange} name="province" value={this.props.user.province} />
                        </div>
                        <div className="pure-u-1-3">
                            <TextField hintText="Zip/Postal" onChange={this.handleChange} name="postalcode" value={this.props.user.postal} />
                        </div>
                        <br />
                        <SelectField floatingLabelText="Country" onChange={this.handleSelect} value={this.props.user.country}>
                            <MenuItem value="US" primaryText="US" />
                            <MenuItem value="Canada" primaryText="Canada" />
                        </SelectField>
                    </div>
                </div>
                <br />
                <div className="pure-u-1-2">
                    <h4>Contact Information</h4>
                    <TextField hintText="Phone" onChange={this.handleChange} name="phone" value={this.props.user.phone} />
                    <br />
                    <TextField hintText="Email" onChange={this.handleChange} name="email" value={this.props.user.email} />
                </div>
                <br />
                <div className="pure-u-1-2" style={{ marginTop: '20px' }}>
                    <RaisedButton label="Continue" primary={true} onTouchTap={this.continue} />
                </div>
            </div>
        );
    }
}