import React from 'react';
import { GoogleLogout } from 'react-google-login';

const GoogleLogoutButton = () => {
    const logout = () => {
        console.log("logout");
    }

    return (
        <div>
            <GoogleLogout
                clientId="404067026197-5c2cba9m00d56qhpnnppgfivk92f7vgn.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
                >
            </GoogleLogout>
        </div>
    );
}

export default GoogleLogoutButton;
