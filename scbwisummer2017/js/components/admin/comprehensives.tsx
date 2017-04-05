import * as React from 'react';
import { connect } from 'react-redux';
import { fetchComprehensives } from '../../redux/actions/admin';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

@connect(state => ({ admin: state.admin}))
export default class Comprehensives extends React.Component<any, any> {
    constructor() {
        super();
    }

    componentWillMount = () => {
        const {dispatch} = this.props;

        dispatch(fetchComprehensives());
    }

    renderComprehensives = () => {
        return this.props.admin.comprehensives.map((item, index) => {
            return (
                <TableRow striped={index % 2 == 0} key={item.id}>
                    <TableRowColumn>{item.title}</TableRowColumn>
                    <TableRowColumn>{item.presenters}</TableRowColumn>
                    <TableRowColumn>{item.description}</TableRowColumn>
                    <TableRowColumn>0</TableRowColumn>
                    <TableRowColumn>{item.maxattendees}</TableRowColumn>
                </TableRow>
            );
        });
    }

    render() {
        return (
            <div>
                <h1>Comprehensives</h1>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                            <TableHeaderColumn>Presenters</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Num Attendees</TableHeaderColumn>
                            <TableHeaderColumn>Max Attendees</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.renderComprehensives()}
                    </TableBody>
                </Table>
            </div>
        );
    }
}