import React from 'react';
import { useHistory } from 'react-router';
import { doApiMethod, URL_API } from './services/apiService';

const AuthUser = (props) => {
    let history = useHistory();

    React.useEffect(() => {
        console.log("auth-log");
        if(localStorage["user_token"]){
            doApi();
        }
    },[props]) 

    const doApi = async() => {
        let url = URL_API+"/checkUser";
        let data = await doApiMethod(url,"POST", {});
        if(data.auth !== "success"){
          localStorage.removeItem("user_token");
          history.push("/");
        }
      }
    return(
        <React.Fragment>
        </React.Fragment>
    )
}

export default AuthUser