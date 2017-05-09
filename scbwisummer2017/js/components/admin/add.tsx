import * as React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { fetchComprehensives, fetchWorkshops, register } from '../../redux/actions/admin';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

@connect(state => ({ admin: state.admin, regData: state.regData }))
export default class Add extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            user: {
                firstname: '',
                lastname: '',
                address1: '',
                address2: '',
                city: '',
                province: '',
                postal: '',
                email: '',
                phone: '',
                member: false,
                country: 'US',
            },
            registration: {
                track: -1,
                comprehensive: -1,
                manuscriptcritiques: 0,
                portfoliocritiques: 0,
            }
        };
    }

    componentWillMount = () => {
        const { dispatch } = this.props;

        dispatch(fetchComprehensives());
        dispatch(fetchWorkshops());
    }

    handleUserChange = (event, value) => {
        this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: value
            }
        });
    }

    handleUserSelect = (event, index, value) => {
        this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: value
            }
        });
    }

    handleRegSelect = (event, value) => {
        this.setState({
            registration: {
                ...this.state.registration,
                [event.target.name]: value
            }
        });
    }

    handleRegistrationChange = (event, value) => {
        this.setState({
            registration: {
                ...this.state.registration,
                [event.target.name]: value
            }
        });
    }

    submit = () => {
        const { dispatch } = this.props;

        dispatch(register(this.state.registration, this.state.user, () => {
            this.props.router.push({
                pathname: '/dashboard'
            });
        }, () => {
            console.log('oh dear')
        }));
    }

    makeComprehensiveList = () => {
        return this.props.admin.comprehensives.map((item, index) => {
            return (
                <RadioButton value={item.id} label={`${item.title} presented by ${item.presenters}`} key={item.id} />
            );
        });
    }

    makeTrackList = () => {
        return this.props.admin.workshops.map((item, index) => {
            return (
                <RadioButton value={item.id} label={`${item.title} presented by ${item.presenters}`} key={item.id} />
            );
        });
    }

    render() {
        return (
            <div className="pure-u-1">
                <h2>Add a registration</h2>
                <div className="pure-u-1 pure-u-md-1-2">
                    <h4>Name</h4>
                    <div className="pure-u-1 pure-u-md-1-2">
                        <TextField hintText="First Name" onChange={this.handleUserChange} name="firstname" value={this.state.user.firstname} />
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2">
                        <TextField hintText="Last Name" onChange={this.handleUserChange} name="lastname" value={this.state.user.lastname} />
                    </div>
                </div>
                <br />
                <div className="pure-u-1 pure-u-md-1-2">
                    <h4>Address</h4>
                    <div className="pure-u-1">
                        <TextField hintText="Address 1" onChange={this.handleUserChange} name="address1" value={this.state.user.address1} />
                        <br />
                        <TextField hintText="Address 2" onChange={this.handleUserChange} name="address2" value={this.state.user.address2} />
                        <br />
                        <div className="pure-u-1 pure-u-md-1-3">
                            <TextField hintText="City" onChange={this.handleUserChange} name="city" value={this.state.user.city} />
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <TextField hintText="State/Province" onChange={this.handleUserChange} name="province" value={this.state.user.province} />
                        </div>
                        <div className="pure-u-1 pure-u-md-1-3">
                            <TextField hintText="Zip/Postal" onChange={this.handleUserChange} name="postal" value={this.state.user.postal} />
                        </div>
                        <br />
                        <SelectField floatingLabelText="Country" onChange={this.handleUserSelect} value={this.state.user.country}>
                            <MenuItem value="US" primaryText="US" />
                            <MenuItem value="Canada" primaryText="Canada" />
                        </SelectField>
                    </div>
                </div>
                <br />
                <div className="pure-u-1 pure-u-md-1-2">
                    <h4>Contact Information</h4>
                    <TextField hintText="Phone" onChange={this.handleUserChange} name="phone" value={this.state.user.phone} />
                    <br />
                    <TextField hintText="Email" onChange={this.handleUserChange} name="email" value={this.state.user.email} />
                    <br />
                    <RadioButtonGroup name="member" onChange={this.handleUserSelect} defaultSelected={true} value={this.state.user.member}>
                        <RadioButton value={true} label="Member" key={0} />
                        <RadioButton value={false} label="Non Member" key={1} />
                    </RadioButtonGroup>
                </div>
                <div>
                    <h4>Comprehensive</h4>
                    <RadioButtonGroup name="comprehensive" onChange={this.handleRegSelect}>
                        {this.makeComprehensiveList()}
                    </RadioButtonGroup>
                </div>
                <div>
                    <h4>Workshop</h4>
                    <RadioButtonGroup name="track" onChange={this.handleRegSelect}>
                        {this.makeTrackList()}
                    </RadioButtonGroup>
                </div>
                <h4>Manuscript Critiques</h4>
                <div>
                    <RadioButtonGroup name="manuscriptcritiques" defaultSelected={0} onChange={this.handleRegSelect}>
                        <RadioButton label="0 (+$0)" value={0} />
                        <RadioButton label="1 (+$50)" value={1} />
                        <RadioButton label="2 (+$100)" value={2} />
                        <RadioButton label="3 (+$150)" value={3} />
                        <RadioButton label="4 (+$200)" value={4} />
                    </RadioButtonGroup>
                </div>

                <h4>Portfolio Reviews</h4>
                <div>
                    <RadioButtonGroup name="portfoliocritiques" defaultSelected={0} onChange={this.handleRegSelect}>
                        <RadioButton label="0 (+$0)" value={0} />
                        <RadioButton label="1 (+$50)" value={1} />
                        <RadioButton label="2 (+$100)" value={2} />
                        <RadioButton label="3 (+$150)" value={3} />
                        <RadioButton label="4 (+$200)" value={4} />
                    </RadioButtonGroup>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <RaisedButton label="Save" onClick={this.submit} primary={true} />
                </div>
            </div>
        );
    }
}