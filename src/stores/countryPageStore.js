import { makeAutoObservable, toJS } from "mobx"
import { doApiGet } from "../services/apiService";

class CountryPageStore {
    //States
    countryData = {};
    singleUserData = [];
    usersData = [];
    commentsData = [];

    constructor() {
        makeAutoObservable(this);
    }

    //Functions

    async getCommentsData(url) {
        let data = await doApiGet(url);
        this.commentsData = data;
        console.log(toJS(this.commentsData));
    }

    async getSingleCountryData(url) {
        let data = await doApiGet(url);
        this.countryData = data;
        console.log(this.countryData);
    }

    async getUsersData(url){
        console.log(url);
        let data = await doApiGet(url);
        console.log(data);
        this.singleUserData = [...this.singleUserData, data];
        this.usersData = this.singleUserData;
        console.log(toJS(this.usersData));
    }

    starsRender(numOfStars){
        let stars = [];
        for (let i = 0; i < numOfStars; i++) {
            stars[i] = (<i className="fas fa-star fa-2x text-warning"></i>)
        }
        return stars;
    }
}

const storeCountry = new CountryPageStore();

export default storeCountry;