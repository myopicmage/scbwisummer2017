import * as React from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { addCoupon, fetchCoupons } from '../../redux/actions/admin';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

@connect(state => ({ admin: state.admin }))
export default class Coupons extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            coupon: {
                type: 0,
                text: '',
                value: ''
            }
        };
    }

    componentWillMount = () => {
        const {dispatch} = this.props;

        dispatch(fetchCoupons());
    }

    handleChange = (event, value) => {
        this.setState({
            coupon: {
                ...this.state.coupon,
                [event.target.name]: value
            }
        });
    }

    handleSelect = (event, value) => {
        this.setState({
            coupon: {
                ...this.state.coupon,
                type: value
            }
        });
    }

    save = () => {
        const {dispatch} = this.props;

        dispatch(addCoupon(this.state.coupon));
    }

    renderCouponList = () => {
        return this.props.admin.coupons.map((item, index) => {
            let type = '';
            let value = item.value;

            switch (item.type) {
                case 0:
                    type = 'Percent Off';
                    value = `${item.value}%`;
                    break;
                case 2:
                    type = 'Total Cost';
                    value = `\$${item.value}`;
                    break;
            }

            return (
                <TableRow key={item.id}>
                    <TableRowColumn>{type}</TableRowColumn>
                    <TableRowColumn>{item.text}</TableRowColumn>
                    <TableRowColumn>{value}</TableRowColumn>
                </TableRow>
            );
        });
    }

    render() {
        return (
            <div>
                <h1>Coupons</h1>
                <Table selectable={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Type</TableHeaderColumn>
                            <TableHeaderColumn>Code</TableHeaderColumn>
                            <TableHeaderColumn>Value</TableHeaderColumn>
                            <TableHeaderColumn></TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody stripedRows={true} displayRowCheckbox={false}>
                        {this.renderCouponList()}
                        <TableRow>
                            <TableRowColumn>
                                <SelectField onChange={this.handleSelect} value={this.state.coupon.type} floatingLabelText="Coupon Type">
                                    {/*<MenuItem value={2} primaryText="Total Cost" />*/}
                                    <MenuItem value={0} primaryText="Percent Off" />
                                </SelectField>
                            </TableRowColumn>
                            <TableRowColumn>
                                <TextField name="text" onChange={this.handleChange} hintText="Code" value={this.state.coupon.text} />
                            </TableRowColumn>
                            <TableRowColumn>
                                <TextField name="value" onChange={this.handleChange} hintText="Value" value={this.state.coupon.value} />
                            </TableRowColumn>
                            <TableRowColumn>
                                <RaisedButton primary={true} onClick={this.save} label="Save" />
                            </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}