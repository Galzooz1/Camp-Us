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
import StepsNav from '../HOC/stepsNav';
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
        storeComment.getCountryComments(countryName);
        console.log(storeCountry.countryData);
    }, [countryName])

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
            <nav className="tabsNav">
                <StepsNav />
            </nav>
            <div className="container mt-5">
                <div style={{ minHeight: "300px" }} className="mt-3 p-3">
                    <h2 className="border-bottom border-5 text-start text-white">Comments</h2>
                    <Comments comments={currentComments} />
                    <div className="d-flex justify-content-end">
                        <Pagination
                            totalCount={storeComment.countryComments.length}
                        />
                    </div>
                    <PostComment countryName={countryName} onPostComment={onPostComment} />
                </div>
            </div>
        </main>
    )
}

export default observer(CountryMain)