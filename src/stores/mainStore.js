import { makeAutoObservable } from "mobx";
import { doApiGet } from "../components/services/apiService";

class MainStore {
    //States
    countriesData = [];

    constructor() {
        makeAutoObservable(this);
    }

    //Functions
    async getCountriesData(url) {
        let data = await doApiGet(url);
        console.log(data)
        this.countriesData = data;
    }
}

const storeMain = new MainStore();

export default storeMain;