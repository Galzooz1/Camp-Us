import { makeAutoObservable } from "mobx";
import { doApiGet, doApiMethod, URL_API } from "../services/apiService";

class UsersStore {
    singleUserData = [];
    singleUser;
    usersData = [];
    usersList = [];
    userData;

    constructor() {
        makeAutoObservable(this);
    }

    async getUsersData(url){
        let data = await doApiMethod(url, "GET");
        this.usersData = data;
        if(this.usersData.length){
            this.usersData.forEach((item, i)=> {
                this.usersList = [...this.usersList, {
                    "#":(i+1),
                    created: item.created,
                    email: item.email,
                    name: item.first_name + ' ' + item.last_name,
                    job: item.job,
                    phone: item.phone,
                    city: item.city,
                    id: item.id
                }]
            })
        }
    }

    async getSingleUser(url) {
        let data = await doApiGet(url);
        this.singleUser = data;
        return this.singleUser;
    }

    async getUserByToken() {
        if(localStorage["user_token"]) {
            let url = URL_API + "/userinfo";
            let infoData = await doApiMethod(url, "GET");
            this.userData = infoData;
        }
    }
}

const storeUsers = new UsersStore();

export default storeUsers;