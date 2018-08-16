/**
 * Home
 */
import React, { Component } from 'react';
import Header from './Header';
import { Route } from 'react-router-dom';
import Admin from '../container/Admin';
import RegisterationForm from '../container/RegisterationForm';
import SignIn from '../container/SignIn';
import '../style/Home.css';


export default class Home extends Component {
    render() {
        return (
            <div className='container'>
                <Header history={this.props.history}/>
                <div className='wrapper'>
                    <Route exact path='/' component={RegisterationForm}/>
                    <Route path='/admin' component={Admin}/>
                    <Route path='/sign_in' component={SignIn}/>
                </div>
            </div>
        )
    }
}
