import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { doApiMethod } from "../components/services/apiService";


class LoginStore {
    
    //States
    isLogged = false;
    signupVisble = false;
    randomNum = (String(Math.floor(Math.random() * 1000000)));
    
    constructor() {
        makeAutoObservable(this);
    }

    //Functions
    setSignup() {
        this.signupVisble = !this.signupVisble
    }

    async onLoginRequest(LoginArgs, url) {
        let data = await doApiMethod(url, "POST", LoginArgs);
        console.log(data);
        if (data.token) {
            localStorage.setItem("user_token", data.token);
            // let infoUrl = URL_API + "/userInfo";
            // let infoData = await doApiMethod(infoUrl, "GET");
            // console.log(infoData);
            this.isLogged = true;
            toast.success("Welcome, " + LoginArgs.email);
            return "success";
        } else {
            toast.error("Username or password are incorrect!");
        }
        console.log("User Logged in: ", data);
    }

    changeRandomNum() {
        this.randomNum = (String(Math.floor(Math.random() * 1000000)));
    }

    async onSignupRequest(SignupArgs, url) {
        delete SignupArgs['captcha'];
        let data = await doApiMethod(url, "POST", SignupArgs);
        console.log(data);
        if (data.add === 1) {
            toast.success("Signed up successful!");
            window.location.reload();
            return "success";
        } else {
            toast.error(data.message);
        }
    }

    async onLogoutRequest() {
        localStorage.removeItem("user_token");
        this.isLogged = false;
        toast.error("You logged out");
    }

}

const storeLogin = new LoginStore();

export default storeLogin;