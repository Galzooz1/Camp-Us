import { makeAutoObservable } from "mobx";
import { doApiMethod } from "../components/services/apiService";

class CountryCommentStore {
    
    constructor() {
        makeAutoObservable(this);
    }

    async postComment(url, commentArgs) {
        let data = await doApiMethod(url, "POST", commentArgs);
        console.log("ADDED", data);
    }
}

const storeComment = new CountryCommentStore();

export default storeComment;