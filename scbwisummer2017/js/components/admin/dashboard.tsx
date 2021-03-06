import * as React from 'react';
import { fetchRegistrations } from '../../redux/actions/admin';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

@connect(state => ({ admin: state.admin }))
export default class Dashboard extends React.Component<any, any> {
    constructor() {
        super();
    }

    componentWillMount = () => {
        const {dispatch} = this.props;

        dispatch(fetchRegistrations());
    }

    renderRegistrations = () => {
        return this.props.admin.registrations.map((item, index) => {
            return (
                <TableRow key={item.id}>
                    <TableRowColumn>{item.user.firstname} {item.user.lastname}</TableRowColumn>
                    <TableRowColumn>{item.comprehensive ? item.comprehensive.title : "None"}</TableRowColumn>
                    <TableRowColumn>{item.workshop ? item.workshop.title : "None"}</TableRowColumn>
                    <TableRowColumn>{item.manuscript}</TableRowColumn>
                    <TableRowColumn>{item.portfolio}</TableRowColumn>
                    <TableRowColumn>{item.coupon ? item.coupon.text : "None"}</TableRowColumn>
                    <TableRowColumn>{item.subtotal}</TableRowColumn>
                    <TableRowColumn>{item.total}</TableRowColumn>
                    <TableRowColumn>{item.submitted}</TableRowColumn>
                </TableRow>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Latest Registrations</h2>
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
                    <TableBody stripedRows={true}>
                        {this.renderRegistrations()}
                    </TableBody>
                </Table>
            </div>
        );
    }
}