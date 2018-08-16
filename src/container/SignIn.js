/**
 * SignIn Form
 */
import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { logger } from '../utils/methods';
import '../style/SignIn.css';

export default class Signin extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
            errorVisibility: 'hidden',
            errorMsg: 'All fields are mandatory!'
        }
    }
    handleSubmit = () => {
        const { userName, password } = this.state;
        if (!(userName && password)) {
            this.setState({
                errorVisibility: 'visible',
                errorMsg: 'All fields are mandatory!'
            });
        } else if (userName === 'admin' && password === 'test') {
            logger('Admin is logged In');
            localStorage.setItem('inOutKey', 'logOut');
            localStorage.setItem('activeItem', 'admin');
            this.props.history.push('/admin')
        }
        else {
            this.setState({
                errorVisibility: 'visible',
                errorMsg: 'Invalid Username Or Password!'
            });
        }
    }
    render() {
        return (
            <div className='signup wrapper_wrapper details'>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>UserName<span>*</span></label>
                        <input placeholder='UserName' onChange={(e) => this.setState({ userName: e.target.value, errorVisibility: 'hidden' })} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password<span>*</span></label>
                        <input placeholder='Password' type='password' onChange={(e) => this.setState({ password: e.target.value, errorVisibility: 'hidden' })} />
                    </Form.Field>
                    <p className='error' style={{ visibility: this.state.errorVisibility }}>{this.state.errorMsg}</p>
                    <Button type='submit'>SignIn</Button>
                </Form>
            </div>
        )
    }
}
