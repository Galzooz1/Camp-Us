import { Image } from "antd";
import { makeAutoObservable, toJS } from "mobx";
import { doApiGet } from "../services/apiService";

class MainStore {
    //States
    countriesData = [];
    continentData = [];
    numOfCountriesInContinent = 0;
    countriesList = [];

    constructor() {
        makeAutoObservable(this);
    }

    //Functions
    async getCountriesData(url) {
        let data = await doApiGet(url);
        this.countriesData = data;
        if(this.countriesData.length){
            this.countriesData.forEach((item, i) => {
                this.countriesList = [...this.countriesList, {
                    "#":(i+1),
                    created: item.created,
                    name: item.name,
                    capital: item.capital,
                    continent: item.mainland.fields.mainland_name.stringValue,
                    image: <Image width={100} height={100} src={item.country_image} alt={item.name}/>,
                    id: item.id
                }]
            })
        }
    }

    getCountriesContinentData(continentValue) {
        this.continentData = [];
        this.numOfCountriesInContinent = 0;
        this.countriesData.forEach((item, i) => {
            if(item.mainland.fields.mainland_name.stringValue === continentValue){
                this.continentData.push(toJS(this.countriesData[i]));
                this.numOfCountriesInContinent+=1;
            }
        })
    }
}

const storeMain = new MainStore();

export default storeMain;