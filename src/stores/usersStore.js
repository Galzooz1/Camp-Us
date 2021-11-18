import { makeAutoObservable, toJS } from "mobx";
import { doApiGet } from "../services/apiService";

class UsersStore {
    singleUserData = [];
    singleUser;
    usersData = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getUsersData(url){
        console.log(url);
        let data = await doApiGet(url);
        console.log(data);
        this.singleUserData = [...this.singleUserData, data];
        this.usersData = this.singleUserData;
        console.log(toJS(this.usersData));
    }

    async getSingleUser(url) {
        console.log(url)
        let data = await doApiGet(url);
        this.singleUser = data;
        console.log(this.singleUser);
        return this.singleUser;
    }
}

const storeUsers = new UsersStore();

export default storeUsers;