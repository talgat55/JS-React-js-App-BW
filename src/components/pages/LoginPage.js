import React, {Fragment} from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
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
};

LoginPage.PropTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};


export default  connect( null, {login})(LoginPage);