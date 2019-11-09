import React, { Component } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
        this.setState({ email: '', password: ''});
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange} 
                        value={email}
                        name="email"
                        type="email"
                        label="email"
                        required />
                    <FormInput
                        handleChange={this.handleChange} 
                        value={password}
                        name="password"
                        type="password"
                        label="password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton signInGoogle onClick={signInWithGoogle}>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SignIn;