import { makeAutoObservable } from "mobx"
import { toast } from "react-toastify";
import { doApiGet, doApiMethod, URL_API } from "../services/apiService";

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

    async deleteSingleActivity(countryId, countryName, activity, indexOfActivity) {
        let url = URL_API + "/countries/activity/"+countryId;
        let data = await doApiMethod(url, "DELETE", {
            "activity":activity,
            "indexOfActivity":indexOfActivity,
            "countryName":countryName
        });
        if(data.delete === 1){
            toast.success("Item deleted");
        }else if(!data){
            toast.error("Try again later")
        }else{
            toast.error("Try again later")
        }
    }
}

const storeCountry = new CountryPageStore();

export default storeCountry;