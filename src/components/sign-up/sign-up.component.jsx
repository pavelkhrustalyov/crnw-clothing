import React, { useState } from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


const SignUp = () => {
    const [ userCredentials, setCredentials ] = useState({
        email: '',
        password: '',
        displayName: '',
        confirmPassword: ''
    });

    const { email, password, displayName, confirmPassword } = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();


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
            setCredentials({
              displayName: '',
              email: '',
              password: '',
              confirmPassword: ''
            });
          } catch (error) {
            console.error(error);
          }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className="sign-up">
            <h2 className="title">I don't have account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    handleChange={handleChange}
                    value={displayName}
                    type="text"
                    name="displayName"
                    label="Display Name"
                    required/>
                <FormInput
                    handleChange={handleChange}
                    value={email}
                    type="email"
                    name="email"                       
                    label="Email"
                    required/>
                <FormInput
                    handleChange={handleChange}
                    value={password}
                    type="password"
                    name="password"
                    label="Password"
                    required/>
                <FormInput
                    handleChange={handleChange}
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
 
export default SignUp;
