import React, {Fragment} from 'react';
import LoginForm from '../forms/LoginForm';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {login}  from '../../actions/auth';

class LoginPage extends React.Component {
    submit = data => this.props.login(data).then(() => this.props.history.push("/"));

    render() {

        return (
            <Fragment>
                <h1>Login page </h1>
                <LoginForm submit={this.submit}/>
            </Fragment>
        );
    };
}

LoginPage.propTypes = {
    history: propTypes.shape({
        push: propTypes.func.isRequired
    }).isRequired,
    login: propTypes.func.isRequired
};


export default  connect( null, {login})(LoginPage);