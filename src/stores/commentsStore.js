import { makeAutoObservable, toJS } from "mobx";
import { doApiGet, doApiMethod, URL_API } from "../services/apiService";
import storeUsers from "./usersStore";

class CommentsStore {
    commentsData = [];
    countryComments = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getCommentsData(url) {
        let data = await doApiGet(url);
        this.commentsData = data;
        console.log(toJS(this.commentsData));
    }

    async getCountryComments(countryName) {
        this.countryComments = [];
        let url = URL_API + "/comments";
        let data = await doApiGet(url);
        this.commentsData = data;
        if (this.commentsData.length) {
            this.commentsData.forEach(item => {
                if (item.country_name === countryName) {
                    this.countryComments = [...this.countryComments, {
                        user: item.user_name,
                        comment: item.comment,
                        commentId: item.commentId
                    }]
                }
            })
        }
        console.log(toJS(this.countryComments));
    }

    async postComment(url, commentArgs) {
        let data = await doApiMethod(url, "POST", commentArgs);
        this.getCountryComments(commentArgs.country_name);
        console.log("ADDED", data);
    }
}

const storeComment = new CommentsStore();

export default storeComment;