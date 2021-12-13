import { makeAutoObservable, toJS } from "mobx";
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
        console.log(url);
        let data = await doApiMethod(url, "GET");
        console.log(data);
        this.usersData = data;
        if(this.usersData.length){
            this.usersData.forEach((item, i)=> {
                this.usersList = [...this.usersList, {
                    "#":i,
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
        // this.singleUserData = [...this.singleUserData, data];
        // this.usersData = this.singleUserData;
        console.log(toJS(this.usersData));
    }

    async getSingleUser(url) {
        console.log(url)
        let data = await doApiGet(url);
        this.singleUser = data;
        console.log(this.singleUser);
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