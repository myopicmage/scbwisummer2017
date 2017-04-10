import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPrices, addPrice, makePrice } from '../../redux/actions/admin';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

@connect(state => ({ admin: state.admin }))
export default class Prices extends React.Component<any, any> {
    constructor() {
        super();
    }

    componentWillMount = () => {
        const {dispatch} = this.props;

        dispatch(fetchPrices());
    }

    handleChange = (event, value) => {
        const {dispatch} = this.props;

        dispatch(makePrice({
            ...this.props.admin.tempprice,
            [event.target.name]: value
        }));
    }

    save = () => {
        const {dispatch} = this.props;

        dispatch(addPrice(this.props.admin.tempprice));
    }

    renderPricesList = () => {
        return this.props.admin.prices.map((item, index) => {
            return (
                <TableRow key={item.id}>
                    <TableRowColumn>{item.type}</TableRowColumn>
                    <TableRowColumn>{item.late === true ? "Yes" : "No"}</TableRowColumn>
                    <TableRowColumn>{item.member === true ? "Yes" : "No"}</TableRowColumn>
                    <TableRowColumn>${item.value}</TableRowColumn>
                </TableRow>
            );
        });
    }

    render() {
        return (
            <div>
                <h1>Prices</h1>
                <Table selectable={false}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Type</TableHeaderColumn>
                            <TableHeaderColumn>Late Price</TableHeaderColumn>
                            <TableHeaderColumn>Member</TableHeaderColumn>
                            <TableHeaderColumn>Value</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody stripedRows={true}>
                        {this.renderPricesList()}
                        <TableRow>
                            <TableRowColumn>
                                <TextField name="type" onChange={this.handleChange} hintText="Type" />
                            </TableRowColumn>
                            <TableRowColumn>
                                <Checkbox name="late" onCheck={this.handleChange} label="Late" />
                            </TableRowColumn>
                            <TableRowColumn>
                                <Checkbox name="member" onCheck={this.handleChange} label="Member" />
                            </TableRowColumn>
                            <TableRowColumn>
                                <TextField name="value" onChange={this.handleChange} hintText="Value" />
                            </TableRowColumn>
                            <TableRowColumn>
                                <RaisedButton label="Add" onClick={this.save} primary={true} />
                            </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}