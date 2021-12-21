import React from 'react';
import { useHistory } from 'react-router';
import { isJwtExpired } from 'jwt-check-expiration';
import storeLogin from '../../stores/loginStore';
import storeAdmin from '../../stores/adminStore';

const AuthUser = (props) => {
    let history = useHistory();
    React.useEffect(() => {
        if (localStorage["user_token"]) {
            console.log("auth-log");
            console.log('isExpired is:', isJwtExpired(localStorage["user_token"]));
            if (isJwtExpired(localStorage["user_token"])) {
                storeLogin.onLogoutRequest();
                history.go(0);
            }
        }
    }, [props, history])

    React.useEffect(() => {
        if(localStorage["user_token"]) {
            console.log("auth-admin");
            storeAdmin.checkIfAdmin();
        }
    }, [props])
    return (
        <React.Fragment>
        </React.Fragment>
    )
}

export default AuthUser