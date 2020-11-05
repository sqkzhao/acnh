import React from 'react';
import { GoogleLogout } from 'react-google-login';

const GoogleLogoutButton = () => {
    const logout = () => {
        console.log("logout");
    }

    return (
        <div>
            <GoogleLogout
                clientId=""
                buttonText="Logout"
                onLogoutSuccess={logout}
                >
            </GoogleLogout>
        </div>
    );
}

export default GoogleLogoutButton;
