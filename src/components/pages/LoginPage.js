import React, {Fragment} from 'react';
import LoginForm from '../forms/LoginForm';

class LoginPage extends React.Component {
    render()
    {
        return (
            <Fragment>
                <h1>Login page </h1>
                <LoginForm  />
            </Fragment>
        );
    }
    ;
}

export default LoginPage;