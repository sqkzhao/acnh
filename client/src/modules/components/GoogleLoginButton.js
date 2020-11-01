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
                clientId="404067026197-5c2cba9m00d56qhpnnppgfivk92f7vgn.apps.googleusercontent.com"
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

export default GoogleLoginButton;

// email: "sqkzhao@gmail.com"
// familyName: "Zhao"
// givenName: "Kay"
// googleId: "110091977266337910406"
// imageUrl: "https://lh6.googleusercontent.com/-gMEc5fT3_70/AAAAAAAAAAI/AAAAAAAACw0/AMZuucnXxvWKh-e4wEQis9W-XMMOw1KNqg/s96-c/photo.jpg"
// name: "Kay Zhao"