import React, { useRef } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './login.css';
import SocialLogin from '../../Login/SocialLogin/SocialLogin';



// import auth from '../../../firebase.init';


const Login = () => {
    const [email] = useAuthState(auth);

    const location = useLocation();
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const navigateRegistration = (event) => {
        navigate('/registration');
    }
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        if (!user) {
            return;
        }

        // console.log( email, password);
        console.log(user);
    }
    const resetPassword = async () => {
        if (email) {
            sendPasswordResetEmail(email);
        }
    }

    return (

        <div className="login-form">
            <h2 className="my-4 bg-dark text-white py-3 text-center">Please Login</h2>
            <form onSubmit={handleSubmit}>

                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Login" />
                <p>{errorElement}</p>
            </form>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <p>Don't have an account? <Link className="pe-auto text-decoration-none" onClick={navigateRegistration} to="/registration"> Create new account</Link> </p>
            <SocialLogin />
        </div>
    );
};

export default Login;