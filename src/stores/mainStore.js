import { makeAutoObservable, toJS } from "mobx";
import { doApiGet } from "../components/services/apiService";

class MainStore {
    //States
    countriesData = [];
    continentData = [];
    numOfCountriesInContinent = 0;

    constructor() {
        makeAutoObservable(this);
    }

    //Functions
    async getCountriesData(url) {
        let data = await doApiGet(url);
        console.log(data)
        this.countriesData = data;
    }

    getCountriesContinentData(continentValue) {
        // alert(continentValue)
        this.continentData = [];
        this.numOfCountriesInContinent = 0;
        this.countriesData.forEach((item, i) => {
            if(item.mainland.fields.mainland_name.stringValue === continentValue){
                this.continentData.push(toJS(this.countriesData[i]));
                this.numOfCountriesInContinent+=1;
            }
        })

        console.log(toJS(this.continentData));
        console.log(this.numOfCountriesInContinent);
    }
}

const storeMain = new MainStore();

export default storeMain;