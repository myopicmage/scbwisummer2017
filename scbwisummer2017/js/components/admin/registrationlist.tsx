import * as React from "react";
import { fetchRegistrations } from '../../redux/actions/admin';
import { connect } from 'react-redux';
import { Link } from "react-router";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

@connect(state => ({ admin: state.admin }))
export default class RegistrationList extends React.Component<any, any> {
    constructor() {
        super();
    }

    componentWillMount = () => {
        const {dispatch} = this.props;

        dispatch(fetchRegistrations(0));
    }

    renderRegistrations = () => {
        return this.props.admin.registrations.map((item, index) => {
            return (
                <TableRow key={item.id}>
                    <TableRowColumn>{item.Name}</TableRowColumn>
                    <TableRowColumn>{item.Comprehensive}</TableRowColumn>
                    <TableRowColumn>{item.Workshop}</TableRowColumn>
                    <TableRowColumn>{item.Manuscripts}</TableRowColumn>
                    <TableRowColumn>{item.Portfolios}</TableRowColumn>
                    <TableRowColumn>{item.Coupon}</TableRowColumn>
                    <TableRowColumn>{item.Subtotal}</TableRowColumn>
                    <TableRowColumn>{item.Total}</TableRowColumn>
                    <TableRowColumn>{item.Submitted}</TableRowColumn>
                </TableRow>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>All Registrations</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Comprehensive</TableHeaderColumn>
                            <TableHeaderColumn>Workshop</TableHeaderColumn>
                            <TableHeaderColumn>Manuscript Critiques</TableHeaderColumn>
                            <TableHeaderColumn>Portfolio Reviews</TableHeaderColumn>
                            <TableHeaderColumn>Coupon</TableHeaderColumn>
                            <TableHeaderColumn>Subtotal</TableHeaderColumn>
                            <TableHeaderColumn>Total</TableHeaderColumn>
                            <TableHeaderColumn>Submitted</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.renderRegistrations()}
                    </TableBody>
                </Table>
            </div>
        );
    }
}