import { Button, Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import storeCountry from '../../stores/countryPageStore';
import { URL_API } from '../../services/apiService';
import "./css/countryComments.css"

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
        <div className="bg-dark p-4">
            {storeCountry?.usersData?.length ?
                comments.map((item, i) => {
                    return (
                        <Fragment key={i}>
                            <div className="commentPill rounded-pill border shadow p-2">
                                    <span className="fw-bold me-1">
                                        {storeCountry?.usersData[i]?.first_name ?
                                            `${storeCountry?.usersData[i]?.first_name}:`
                                            :
                                            <Spin style={{ color: "#fff" }} />
                                        }
                                    </span>
                                    <span>
                                        {item}
                                    </span>
                            </div>
                            <hr className="bg-light" />
                        </Fragment>
                    )
                })
                :
                <>
                    <div className="d-flex justify-content-center">
                        <div className="display-6 text-info mb-4">Be the first one to comment!</div>
                    </div>
                    <hr className="bg-light" />
                </>
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
