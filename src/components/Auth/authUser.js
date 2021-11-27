import React from 'react';
import { useHistory } from 'react-router';
// import { doApiMethod, URL_API } from '../../services/apiService';
import { isJwtExpired } from 'jwt-check-expiration';

const AuthUser = (props) => {
    let history = useHistory();
    React.useEffect(() => {
        console.log("auth-log");
        if (localStorage["user_token"]) {
            console.log('isExpired is:', isJwtExpired(localStorage["user_token"]));
            if (isJwtExpired(localStorage["user_token"])) {
                localStorage.removeItem("user_token");
                history.push("/");
            }
        }
    }, [props, history])
    return (
        <React.Fragment>
        </React.Fragment>
    )
}

export default AuthUser