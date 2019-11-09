import React, { Component } from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends Component {
    state = {
        email: '',
        password: '',
        displayName: '',
        confirmPassword: ''
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password, displayName, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Passwords must be same!');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
              email,
              password
            );
      
            await createUserProfileDocument(user, { displayName });
            this.setState({
              displayName: '',
              email: '',
              password: '',
              confirmPassword: ''
            });
          } catch (error) {
            console.error(error);
          }
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { email, password, displayName, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I don't have account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        value={displayName}
                        type="text"
                        name="displayName"
                        label="Display Name"
                        required/>
                    <FormInput
                        handleChange={this.handleChange}
                        value={email}
                        type="email"
                        name="email"                       
                        label="Email"
                        required/>
                    <FormInput
                        handleChange={this.handleChange}
                        value={password}
                        type="password"
                        name="password"
                        label="Password"
                        required/>
                    <FormInput
                        handleChange={this.handleChange}
                        value={confirmPassword}
                        type="password"
                        name="confirmPassword"
                        label="Confirm password"
                        required/>

                    <div className="buttons">
                        <CustomButton>
                            Sign Up
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SignUp;
