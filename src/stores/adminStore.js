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
                break;
            case "countries":
                return storeMain.countriesList;
                break;
            case "comments":
                return storeComment.commentsList;
                break;
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
}

const storeAdmin = new AdminStore();

export default storeAdmin;