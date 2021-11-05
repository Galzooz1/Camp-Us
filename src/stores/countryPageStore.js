import { makeAutoObservable } from "mobx"
import { doApiGet } from "../components/services/apiService";

class CountryPageStore {
    //States
    countryData = {};

    constructor() {
        makeAutoObservable(this);
    }

    //Functions
    async getSingleCountryData(url) {
        let data = await doApiGet(url);
        this.countryData = data;
        console.log(this.countryData);
    }
}

const storeCountry = new CountryPageStore();

export default storeCountry;