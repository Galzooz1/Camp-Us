import { makeAutoObservable, toJS } from "mobx"
import { doApiGet } from "../services/apiService";

class CountryPageStore {
    //States
    countryData = {};
    activityName = "hotels";

    constructor() {
        makeAutoObservable(this);
    }

    //Functions
    async getSingleCountryData(url) {
        let data = await doApiGet(url);
        this.countryData = data;
        console.log(this.countryData);
    }


    starsRender(numOfStars){
        let stars = [];
        for (let i = 0; i < numOfStars; i++) {
            stars[i] = (<i className="fas fa-star fa-2x text-warning"></i>)
        }
        return stars;
    }

    setActivityName(name){
        this.activityName = name;
    }
}

const storeCountry = new CountryPageStore();

export default storeCountry;