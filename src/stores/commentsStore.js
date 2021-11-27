import { makeAutoObservable, toJS } from "mobx";
import { doApiGet, doApiMethod, URL_API } from "../services/apiService";
import storeUsers from "./usersStore";

class CommentsStore {
    commentsData = [];
    countryComments = [];
    currentPage = 1;
    countPerPage = 2;
    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async getCommentsData(url) {
        let data = await doApiGet(url);
        this.commentsData = data;
        console.log(toJS(this.commentsData));
    }

    async getCountryComments(countryName) {
        this.loading = true;
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
        this.countryComments.reverse();
        this.loading = false;
        console.log(toJS(this.countryComments));
    }

    async postComment(url, commentArgs) {
        let data = await doApiMethod(url, "POST", commentArgs);
        this.getCountryComments(commentArgs.country_name);
        // this.currentPage = 1;
        console.log("ADDED", data);
    }

    paginate(pageNumber) {
        this.currentPage = pageNumber;
    }
}

const storeComment = new CommentsStore();

export default storeComment;