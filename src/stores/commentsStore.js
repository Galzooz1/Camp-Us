import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";
import { doApiGet, doApiMethod, URL_API } from "../services/apiService";

class CommentsStore {
    commentsData = [];
    countryComments = [];
    currentPage = 1;
    countPerPage = 2;
    loading = false;
    commentsList = [];

    constructor() {
        makeAutoObservable(this);
    }

    async getCommentsData(url) {
        let data = await doApiGet(url);
        this.commentsData = data;
        if (this.commentsData.length) {
            this.commentsData.forEach((item, i) => {
                    this.commentsList = [...this.commentsList, {
                        "#":(i+1),
                        created: item.created,
                        name: item.user_name,
                        comment: item.comment,
                        countryName: item.country_name,
                        activity: item.activity,
                        likes: item.likes,
                        userId: item.userId,
                        id: item.commentId,
                        // usersLiked: item.usersLiked.values.forEach(like => {
                        //     like.mapValue.fields.user
                        // }),
                        commentId: item.commentId,
                    }]
            })
        }
    }

    async getCountryComments(countryName, activityName) {
        this.loading = true;
        this.countryComments = [];
        let url = URL_API + "/comments";
        let data = await doApiGet(url);
        this.commentsData = data.filter(comment => comment.activity === activityName);
        if (this.commentsData.length) {
            this.commentsData.forEach(item => {
                if (item.country_name === countryName) {
                    this.countryComments = [...this.countryComments, {
                        user: item.user_name,
                        comment: item.comment,
                        commentId: item.commentId,
                        countryName: item.country_name,
                        activity: item.activity,
                        userId: item.userId,
                        likes: item.likes,
                        usersLiked: item.usersLiked
                    }]
                }
            })
        }
        this.countryComments.reverse();
        this.loading = false;
    }

    async postComment(url, commentArgs) {
        await doApiMethod(url, "POST", commentArgs);
        this.getCountryComments(commentArgs.country_name, commentArgs.activity);
    }

    paginate(pageNumber) {
        this.currentPage = pageNumber;
    }

    async deleteComment(commentId, countryName, activity) {
        let url = URL_API + "/comments/" + commentId;
        let data = await doApiMethod(url, "DELETE", {});
        if (data.delete === 1) {
            toast.success("Comment deleted")
            this.getCountryComments(countryName, activity);
        } else {
            toast.error("Try again later")
        }
    }

    async likeComment(userId, user, commentId, countryName, activity) {
        let url = URL_API + "/comments/" + commentId + "/" + userId;
        let data = await doApiMethod(url, "PUT", {
            "userId": userId,
            "user": user
        });
        if (data) {
            this.getCountryComments(countryName, activity);
        } else {
            toast.error("Try again later")
        }
    }
}

const storeComment = new CommentsStore();

export default storeComment;