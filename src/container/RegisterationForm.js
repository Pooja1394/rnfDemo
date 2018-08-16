/**
 * Registration Form 
 */
import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Submit } from '../action/Action';
import { logger } from '../utils/methods';
import '../style/Registeration.css';

class RegisterationForm extends Component {
    constructor() {
        super();
        this.state = {
            first: '',
            last: '',
            email: '',
            telephone: '',
            errorVisibility: 'hidden',
            errorMsg: 'error',
            color:'#ef4430'
        }
    }
    componentWillMount = () => {logger('Home Page')}
    checkEmail = async (e) => {
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(e)) {
            this.setState({
                errorVisibility: 'visible',
                email: e,
                errorMsg: 'Please Provide the valid Email Address!',
                color:'#ef4430'
            });
            return false;
        }
        else {
            this.setState({
                errorVisibility: 'hidden',
                email: e
            });
            return true;
        }
    }
    checkTelephone = (e) => {
        let filter = /^\(\d{3}\)\s*\d{3}(?:-|\s*)\d{4}$/;
        if (!filter.test(e)) {
            this.setState({
                errorVisibility: 'visible',
                telephone: e,
                errorMsg: 'Please Provide the valid Phone Number!',
                color:'#ef4430'
            });
            return false;
        }
        else {
            this.setState({
                errorVisibility: 'hidden',
                telephone: e
            });
            return true;
        }
    }
    handleChange = (e, type) => {
        switch (type) {
            case 'email':
                this.checkEmail(e.target.value);
                break;
            case 'telephone':
                this.checkTelephone(e.target.value);
                break;
            default:
                this.setState({
                    [type]: e.target.value,
                    errorVisibility: 'hidden'
                });
        }
    }
    handleSubmit = () => {
        let { first, last, email, telephone } = this.state;
        if (first && last && email && telephone) {
            if (this.checkEmail(email) && this.checkTelephone(telephone)) {
                let obj = {
                    first: first,
                    last: last,
                    email: email.toLowerCase(),
                    telephone: telephone
                }
                logger(`This email ${email} is submitted!`);
                this.setState({first:'',last:'',email:'',telephone:'',color:'#1673ba',errorMsg:'Data successfully submitted!', errorVisibility:'visible'})
                this.props.submitData(obj);
            }
        }
        else {
            this.setState({
                errorMsg: 'All fields are mandatory!',
                errorVisibility: 'visible'
            })
        }
    }
    render() {
        return (
            <div className='registeration wrapper_wrapper details'>
                
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>First Name <span>*</span></label>
                        <input placeholder='First Name' onChange={(e) => this.handleChange(e, 'first')} value={this.state.first}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name <span>*</span></label>
                        <input placeholder='Last Name' onChange={(e) => this.handleChange(e, 'last')} value={this.state.last}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Email Address <span>*</span></label>
                        <input placeholder='Email Address  ex. abc@gmail.com' onChange={(e) => this.handleChange(e, 'email')} value={this.state.email}/>

                    </Form.Field>
                    <Form.Field>
                        <label>Telephone <span>*</span></label>
                        <input placeholder='Telephone  ex. (000)000-0000'
                            onChange={(e) => this.handleChange(e, 'telephone')} value={this.state.telephone}/>
                    </Form.Field>
                    <p className='error' style={{ visibility: this.state.errorVisibility , color:this.state.color}}>{this.state.errorMsg}</p>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        form: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitData: (data) => {
            dispatch(Submit(data));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterationForm);