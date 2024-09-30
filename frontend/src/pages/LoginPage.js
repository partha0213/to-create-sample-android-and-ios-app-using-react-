import React from 'react';
import Login from '../components/auth/Login';
import SocialLogin from '../components/auth/SocialLogin';

const LoginPage = () => {
    return (
        <div>
            <h2>Login</h2>
            <Login />
            <SocialLogin />
        </div>
    );
};

export default LoginPage;
