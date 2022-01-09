import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import storeCountry from '../../stores/countryPageStore';
import { URL_API } from '../../services/apiService';
import PostComment from './countryPostComment';
import { Tooltip } from 'antd';
import storeComment from '../../stores/commentsStore';
import Comments from '../HOC/comments';
import Pagination from '../HOC/pagination';
import StepsNav from '../HOC/stepsNav';


const CountryMain = ({ countryName }) => {
    useEffect(() => {
        let dataUrl = URL_API + "/countries/" + countryName;
        storeCountry.getSingleCountryData(dataUrl);
        storeComment.getCountryComments(countryName, storeCountry.activityName);
        window.scrollTo(0, 0);
    }, [countryName])

    const indexOfLastComment = storeComment.currentPage * storeComment.countPerPage;
    const indexOfFirstComment = indexOfLastComment - storeComment.countPerPage;
    const currentComments = storeComment.countryComments.slice(indexOfFirstComment, indexOfLastComment);

    const onPostComment = (commentArgs) => {
        let url = URL_API + "/comments"
        storeComment.postComment(url, commentArgs);
    }

    return (
        <main>
            <div className="section-country">
                <div className="section-country__header">
                    <div className="section-country__header-box">
                        <img className="section-country__header-box-img" src={storeCountry.countryData?.country_image} alt={storeCountry.countryData.name} />
                        <h1 className="section-country__header-box-h1 heading-primary heading-primary--main">{storeCountry.countryData?.name}</h1>
                    </div>
                    <div className="section-country__header-icon">
                        {storeCountry.countryData?.abroad ?
                            <Tooltip title={`${storeCountry.countryData?.kilometer}`}>
                                <i className="fas fa-plane-departure"></i>
                            </Tooltip>
                            :
                            <Tooltip title="No Flight Needed">
                                <i className="fas fa-home"></i>
                            </Tooltip>

                        }
                    </div>
                </div>
                <div className="section-country__content">
                    <nav className="section-country__nav">
                        <StepsNav />
                    </nav>
                    <div className="section-country__comments">
                            <div className="section-country__comments-header">
                                <h2 className="section-country__comments-header-h2">Comments - {storeCountry.activityName.charAt(0).toUpperCase() + storeCountry.activityName.slice(1)}</h2>
                                <div className="d-flex justify-content-end">
                                    <Pagination
                                        totalCount={storeComment.countryComments.length}
                                    />
                                </div>
                            </div>
                            <Comments comments={currentComments} />
                            <PostComment countryName={countryName} activityName={storeCountry.activityName} onPostComment={onPostComment} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default observer(CountryMain)