import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import storeCountry from '../../stores/countryPageStore';
import { URL_API } from '../../services/apiService';
import './css/countryPage.css'
import CountryContent from './countryContent';
// import CountryComments from './countryComments';
import PostComment from './countryPostComment';
import { Tooltip } from 'antd';
import storeComment from '../../stores/commentsStore';
import Comments from '../HOC/comments';
import Pagination from '../HOC/pagination';
// import storePaginate from '../../stores/paginateStore';
import StepsNav from './stepsNav';
import CountryContent2 from './countryContent';

export const WrapperDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap: wrap;
`;

export const AttractionDiv = styled.div`
min-height: 350px;
`;


const CountryMain = ({ countryName }) => {
    useEffect(() => {
        let dataUrl = URL_API + "/countries/" + countryName;
        storeCountry.getSingleCountryData(dataUrl);
        storeComment.getCountryComments(countryName, storeCountry.activityName);
        console.log(storeCountry.countryData);
        console.log(storeCountry.activityName)
    }, [countryName, storeCountry.activityName])

    const indexOfLastComment = storeComment.currentPage * storeComment.countPerPage;
    const indexOfFirstComment = indexOfLastComment - storeComment.countPerPage;
    const currentComments = storeComment.countryComments.slice(indexOfFirstComment, indexOfLastComment);

    const onPostComment = (commentArgs) => {
        let url = URL_API + "/comments"
        console.log(commentArgs);
        storeComment.postComment(url, commentArgs);
    }

    return (
        <main>
            <div className="section-country">
                <div className="section-country__header">
                    <div className="section-country__header-box">
                        <img className="section-country__header-box-img" src={storeCountry.countryData?.country_image} />
                        <h1 className="section-country__header-box-h1 heading-primary heading-primary--main">{storeCountry.countryData?.name}</h1>
                    </div>
                    <div className="section-country__header-icon">
                        {storeCountry.countryData?.abroad ?
                            <Tooltip title="Flight needed">
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
                                <h2 className="section-country__comments-header-h2">Comments</h2>
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