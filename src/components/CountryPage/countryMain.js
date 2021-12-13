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
        <main className="bg-dark" style={{ padding: "32px" }}>
            <article className="article-header">
                {storeCountry.countryData?.abroad ?
                    <Tooltip title="Flight needed">
                        <div style={{ cursor: "help" }} className="border rounded-circle p-2 ms-3 block">
                            <i className="fas fa-plane-departure"></i>
                        </div>
                    </Tooltip>
                    :
                    <Tooltip title="No Flight Needed">
                        <div style={{ cursor: "help" }} className="border rounded-circle p-2 ms-3 block">
                            <i className="fas fa-home"></i>
                        </div>
                    </Tooltip>

                }
                <h1 className="me-5">{storeCountry.countryData?.name}</h1>
                <div></div>
            </article>
            <div className="content-main">
                <nav className="tabsNav">
                    <StepsNav />
                </nav>
                <div className="container mt-5">
                    <div style={{ minHeight: "300px" }} className="mt-3 p-3">
                        <div className="d-flex justify-content-between border-bottom border-5 mb-3">
                            <h2 className="text-start text-white">Comments</h2>
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