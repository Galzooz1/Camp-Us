import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import storeCountry from '../../stores/countryPageStore';
import { URL_API } from '../../services/apiService';
import './css/countryPage.css'
import CountryContent from './countryContent';
import CountryComments from './countryComments';
import PostComment from './countryPostComment';
import { Tooltip } from 'antd';
import storeComment from '../../stores/commentsStore';
import Comments from '../HOC/comments';
import Pagination from '../HOC/pagination';
import storePaginate from '../../stores/paginateStore';
import StepsNav from '../HOC/stepsNav';

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

    const indexOfLastComment = storePaginate.currentPage * storePaginate.countPerPage;
    const indexOfFirstComment = indexOfLastComment - storePaginate.countPerPage;
    const currentComments = storeComment.countryComments.slice(indexOfFirstComment, indexOfLastComment);

    const onPostComment = (commentArgs) => {
        let url = URL_API + "/comments"
        console.log(commentArgs);
        storeComment.postComment(url, commentArgs);
    }

    return (
        <main className="bg-dark" style={{ padding: "32px" }}>
            <article className="article-header">
                {storeCountry.countryData?.abroad &&
                    <Tooltip title="Flight needed">
                        <div style={{ cursor: "help" }} className="border rounded-circle p-2 ms-3 block">
                            <i className="fas fa-plane-departure"></i>
                        </div>
                    </Tooltip>
                }
                <h1>{storeCountry.countryData?.name}</h1>
                <div></div>
            </article>
            <div>
                <StepsNav />
            </div>
            <hr style={{ backgroundColor: "#263EA0", borderTop: "3px solid #263EA0" }} />
            <div className="container mt-5">
                <WrapperDiv>
                    <div className="col-lg-5">
                        <h2 className="border-bottom text-white">Hotels</h2>
                        <CountryContent dataValue={"hotels"} />
                    </div>
                    <div className="col-lg-5">
                        <h2 className="border-bottom text-white">Campings</h2>
                        <CountryContent dataValue={"campings"} />
                    </div>
                </WrapperDiv>
                <hr />
                <WrapperDiv>
                    <div className="col-lg-5">
                        <h2 className="border-bottom text-white">Restaurants</h2>
                        <CountryContent dataValue={"restaurants"} />
                    </div>
                    <div className="col-lg-5">
                        <h2 className="border-bottom text-white">Attractions</h2>
                        <CountryContent dataValue={"attractions"} />
                    </div>
                </WrapperDiv>
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