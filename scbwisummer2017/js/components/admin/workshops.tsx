import * as React from 'react';
import { connect } from 'react-redux';
import { fetchWorkshops, addWorkshop, makeWorkshop } from '../../redux/actions/admin';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

@connect(state => ({ admin: state.admin }))
export default class Workshops extends React.Component<any, any> {
    constructor() {
        super();
    }

    componentWillMount = () => {
        const {dispatch} = this.props;

        dispatch(fetchWorkshops());
    }

    handleChange = (event, value) => {
        const {dispatch} = this.props;

        dispatch(makeWorkshop({
            ...this.props.admin.tempworkshop,
            [event.target.name]: value
        }));
    } 

    save = () => {
        const {dispatch} = this.props;

        dispatch(addWorkshop(this.props.admin.tempworkshop));
    }

    renderWorkshops = () => {
        return this.props.admin.workshops.map((item, index) => {
            return (
                <TableRow striped={index % 2 == 0} key={item.id}>
                    <TableRowColumn>{item.title}</TableRowColumn>
                    <TableRowColumn>{item.presenters}</TableRowColumn>
                    <TableRowColumn>{item.description}</TableRowColumn>
                    <TableRowColumn>{item.maxattendees}</TableRowColumn>
                    <TableRowColumn>0</TableRowColumn>
                </TableRow>
            );
        });
    }

    render() {
        return (
            <div>
                <h1>Workshops</h1>
                <Table selectable={false}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                            <TableHeaderColumn>Presenters</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Max Attendees</TableHeaderColumn>
                            <TableHeaderColumn>Num Attendees</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody stripedRows={true}>
                        {this.renderWorkshops()}
                        <TableRow>
                            <TableRowColumn>
                                <TextField name="title" onChange={this.handleChange} hintText="Title" />
                            </TableRowColumn>
                            <TableRowColumn>
                                <TextField name="presenters" onChange={this.handleChange} hintText="Presenters" />
                            </TableRowColumn>
                            <TableRowColumn>
                                <TextField name="description" onChange={this.handleChange} hintText="Description" />
                            </TableRowColumn>
                            <TableRowColumn>
                                <TextField name="maxattendees" onChange={this.handleChange} hintText="Max Attendees" />
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