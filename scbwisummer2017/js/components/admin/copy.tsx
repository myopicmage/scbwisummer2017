import * as React from 'react';
import { connect } from 'react-redux';
import { fetchCopy, addCopy, setCopy } from '../../redux/actions/admin';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

@connect(state => ({ admin: state.admin }))
export default class Copy extends React.Component<any, any> {
    constructor() {
        super();
    }

    componentWillMount = () => {
        const { dispatch } = this.props;

        dispatch(fetchCopy());
    }

    handleChange = (event, value) => {
        const {dispatch} = this.props;

        let {copy} = this.props.admin;

        copy[event.target.name] = value;

        dispatch(setCopy(copy));
    }

    save = (item) => {
        const { dispatch } = this.props;
        const { frontpage, comprehensive, workshop, critique } = this.props.admin.copy;

        switch (item) {
            case 'frontpage':
                dispatch(addCopy({ name: 'frontpage', text: frontpage }));
                break;
            case 'comprehensive':
                dispatch(addCopy({ name: 'comprehensive', text: comprehensive }));
                break;
            case 'workshop':
                dispatch(addCopy({ name: 'workshop', text: workshop }));
                break;
            case 'critique':
                dispatch(addCopy({ name: 'critique', text: critique }));
                break;
        }
    }

    render() {
        return (
            <div className="pure-u-1">
                <h1>Copy</h1>
                <Divider />

                <h3>Front Page</h3>
                <TextField
                    hintText="Front page copy"
                    onChange={this.handleChange}
                    name="frontpage"
                    value={this.props.admin.copy.frontpage}
                    multiLine={true}
                    style={{ width: '100%' }}
                    textareaStyle={{ width: '100%' }} />
                <RaisedButton label="Save" primary={true} onClick={this.save} />

                <h3>Comprehensives</h3>
                <TextField
                    hintText="Comprehensives page copy"
                    onChange={this.handleChange}
                    name="comprehensive"
                    value={this.props.admin.copy.comprehensive}
                    multiLine={true}
                    style={{ width: '100%' }}
                    textareaStyle={{ width: '100%' }} />
                <RaisedButton label="Save" primary={true} onClick={this.save} />

                <h3>Workshops</h3>
                <TextField
                    hintText="Workshops page copy"
                    onChange={this.handleChange}
                    name="workshop"
                    value={this.props.admin.copy.workshop}
                    multiLine={true}
                    style={{ width: '100%' }}
                    textareaStyle={{ width: '100%' }} />
                <RaisedButton label="Save" primary={true} onClick={this.save} />

                <h3>Critiques</h3>
                <TextField
                    hintText="Critiques page copy"
                    onChange={this.handleChange}
                    name="critique"
                    value={this.props.admin.copy.critique}
                    multiLine={true}
                    style={{ width: '100%' }}
                    textareaStyle={{ width: '100%' }} />
                <RaisedButton label="Save" primary={true} onClick={this.save} />
            </div>
        );
    }
}