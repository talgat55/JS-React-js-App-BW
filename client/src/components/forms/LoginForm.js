import React from 'react';
import {Button, Form, Message} from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: '',
        },
        loading: false,
        errors: {}
    };
    onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props
                .submit(this.state.data)
                .catch(err => this.setState({ errors: err.response.data.errors, loading: false}));
        }

    };

    validate = data => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "invalid EMail ";
        if (!data.password) errors.password = "Can`t be blank";
        return errors;
    };


    render() {

        const {data, errors, loading} = this.state;
        return (
            <Form onSubmit={this.onSubmit}   loading={loading}>
                {errors && (<Message negative>
                    <Message.Header> Something wrong</Message.Header>
                    <p>{errors.global}</p>
                </Message>)}
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email@mail.ru"
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email}/>}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password}/>}
                </Form.Field>

                <Button primary>Login</Button>
            </Form>
        );
    }
}


export default LoginForm;