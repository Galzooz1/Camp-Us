import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { doApiMethod, URL_API } from "../services/apiService";
import storeComment from "./commentsStore";
import storeMain from "./mainStore";
import storeUsers from "./usersStore";

class AdminStore {
    apiMethodOf = "users";


    constructor() {
        makeAutoObservable(this)
    }

    changeApiMethod(name){
        this.apiMethodOf = name;
    }

    renderApiMethod(apiMethod){
        switch (apiMethod) {
            case "users":
                return storeUsers.usersList;
            case "countries":
                return storeMain.countriesList;
            case "comments":
                return storeComment.commentsList;
            default:
                break;
        }
    }

    async deleteItem(method, id){
        switch (method) {
            case "users":
                let url = URL_API + "/" + id;
                let data = await doApiMethod(url, "DELETE");
                if(data.delete === 1){
                    toast.success("Item deleted")
                }else{
                    toast.error("There's an error")
                }
                break;
            // case "countries":
            //     return storeMain.countriesList;
            //     break;
            // case "comments":
            //     return storeComment.commentsList;
            //     break;
            default:
                break;
        }
    }

    async checkIfAdmin(){
        let url = URL_API+"/checkAdmin";
        let data = await doApiMethod(url, "POST", {});
        if(data.auth !== "admin") {
            localStorage.removeItem("admin");
        }
    }
}

const storeAdmin = new AdminStore();

export default storeAdmin;