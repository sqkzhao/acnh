import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
    const [profile, setprofile] = useState(null);
    const responseGoogle = (res) => {
        setprofile(res.profileObj);
    };

    return (
        <div>
            <GoogleLogin
                clientId=""
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
            {profile ? profile.name : null}
        </div>  
    );
}

