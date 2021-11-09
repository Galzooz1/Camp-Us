import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import storeCountry from '../../stores/countryPageStore';
import { URL_API } from '../services/apiService';

const CountryPageComments = ({ countryData }) => {
    useEffect(() => {
        console.log(toJS(countryData));
        countryData?.comments?.values?.forEach((item, i) => {
            let url = URL_API + "/user/" + item?.mapValue.fields.userId?.stringValue;
            storeCountry.getUsersData(url);
            console.log(toJS(storeCountry.usersData));
        })
    }, []);


    return (
        <div className="bg-secondary p-4">
            {countryData?.comments?.values?.map((item, i) => {
                return (
                    <>
                        <div className="bg-success p-2">
                            {/* {storeCountry?.usersData.length > 0 && */}
                                <span className="fw-bold me-1">
                                    {storeCountry?.usersData[i]?.first_name}:
                                </span>
                            {/* } */}
                            {item?.mapValue.fields.comment?.stringValue}
                        </div>
                        <hr />
                    </>
                )
            })}
            <div className="bg-danger d-flex justify-content-around align-items-center p-2">
                <label>Add New Comment...</label>
                <input type="text" placeholder="Write your comment" className="shadow border form-control w-75 rounded-pill" />
            </div>
        </div>
    )
}

export default observer(CountryPageComments);
