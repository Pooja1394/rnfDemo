/**
 * Header
 */
import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {logger} from '../utils/methods';
import '../style/Header.css'

export default class Header extends Component {

    handleItemClick = (e, { name }) => {
        logger(`Menu item ${name} is selected`)
        if (name === 'signIn') {
            name = 'logOut';
            localStorage.setItem('activeItem', 'logOut');
            this.props.history.push('/sign_in')
        } else if (name === 'logOut') {
            name = 'home';
            logger('Admin is logged Out');
            localStorage.setItem('activeItem', 'home');
            localStorage.removeItem('inOutKey');
            this.props.history.push('/')
        } else
            localStorage.setItem('activeItem', name);
    }

    render() {
        return (
            <div className='header wrapper_wrapper'>
                <Menu>
                    <Menu.Item className='imageItem'><Image
                        src='https://d2utwzaizbvoog.cloudfront.net/sites/default/files/logo-rnf_0.png'
                        as='a'
                        size='mini'
                        href='https://www.rnftechnologies.com/'
                        target='_blank'
                    /></Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link} to='/' name='home' active={localStorage.getItem('activeItem') === 'home' || localStorage.getItem('activeItem') === null} onClick={this.handleItemClick}></Menu.Item>
                        <Menu.Item as={Link} to='/admin' name='admin' active={localStorage.getItem('activeItem') === 'admin'} onClick={this.handleItemClick}></Menu.Item>
                        <Menu.Item
                            active={localStorage.getItem('activeItem') === 'logOut'}
                            name={(localStorage.getItem('inOutKey')) ? 'logOut' : 'signIn'}
                            onClick={this.handleItemClick}></Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
