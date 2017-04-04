import * as React from 'react';

export default class RegisterPage extends React.Component<any, any> {
    render() {
        return (
            <div>
                I AM PAGE {this.props.params.page}
            </div>
        );
    }
}