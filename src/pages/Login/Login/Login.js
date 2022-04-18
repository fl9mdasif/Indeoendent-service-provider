import React from 'react';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import  './login.css';
import SocialLogin from '../../Login/SocialLogin/SocialLogin'

// import auth from '../../../firebase.init';


const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigateRegistration = (event) => {
        navigate('/registration');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
      
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        navigate('/home')
        // console.log( email, password);
        console.log(user);
    }
    return (

        <div className="login-form">
            <h2 className="my-4 bg-dark text-white py-3 text-center">Please Login</h2>
            <form onSubmit={handleSubmit}>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="submit" value="Login" />

            </form>
            <p>Don't have an account? <Link className="pe-auto text-decoration-none" onClick={navigateRegistration} to="/registration"> Create new account</Link> </p>
            <SocialLogin/>
        </div>
    ); 
};

export default Login;