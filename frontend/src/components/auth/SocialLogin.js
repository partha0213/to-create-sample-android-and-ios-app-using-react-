import React from 'react';
import { socialLogin } from '../../api/auth';

const SocialLogin = () => {
    const handleSocialLogin = async (provider) => {
        // Replace this with actual logic to get the access token
        const accessToken = 'example-access-token'; 
        await socialLogin(provider, accessToken);
    };

    return (
        <div>
            <button onClick={() => handleSocialLogin('google')}>Login with Google</button>
            <button onClick={() => handleSocialLogin('facebook')}>Login with Facebook</button>
        </div>
    );
};

export default SocialLogin;
