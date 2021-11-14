import { Button, Spin } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import storeCountry from '../../stores/countryPageStore';
import { URL_API } from '../services/apiService';

const CountryPageComments = ({ countryData }) => {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        let url = URL_API + "/comments"
        storeCountry.getCommentsData(url);
        storeCountry.commentsData.forEach((item, i) => {
            if (item.country_name === countryData.name) {
                setComments(comments => [...comments, item.comment])
                let url = URL_API + "/user/" + item.userId;
                storeCountry.getUsersData(url);
            }
        })
    }, [countryData]);


    return (
        <div className="bg-secondary p-4">
            {storeCountry?.usersData?.length > 0 ?
                comments.map((item, i) => {
                    return (
                        <Fragment key={i}>
                            <div className="bg-success p-2">
                                {/* {storeCountry?.usersData.length > 0 && */}
                                <span className="fw-bold me-1">
                                    {storeCountry?.usersData[i]?.first_name}:
                                </span>
                                {/* } */}
                                {item}
                            </div>
                            <hr />
                        </Fragment>
                    )
                })
                :
                <div className="d-flex justify-content-center">
                    <Spin />
                </div>
            }
            <div className="bg-danger d-flex justify-content-between align-items-center p-2">
                <label>Add New Comment...</label>
                <input type="text" placeholder="Write your comment" className="shadow border form-control w-75 rounded-pill" />
                <Button type="primary">
                    Post
                </Button>
            </div>
        </div>
    )
}

export default observer(CountryPageComments);
