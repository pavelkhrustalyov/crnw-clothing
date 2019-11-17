import React, { useState } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [ userCredentials, setCredentials ] = useState({
        email: '',
        password: ''
    });

    const { email, password } = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
        setCredentials({ email: '', password: ''});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    handleChange={handleChange}
                    value={email}
                    name="email"
                    type="email"
                    label="email"
                    required />
                <FormInput
                    handleChange={handleChange}
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
 
export default SignIn;