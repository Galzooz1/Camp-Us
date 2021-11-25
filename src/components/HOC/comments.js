import { Spin } from 'antd';
import React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';

const CommentDiv = styled.div`
background-color: #AED4FF;
width: fit-content;
`

const Comments = ({ comments }) => {
    return (
        <>
            {comments.length ?
                comments.reverse().map((item, i) => {
                    return (
                        <Fragment key={i}>
                            <CommentDiv className="commentPill rounded-pill border shadow p-2">
                                {item ?
                                    <>
                                        <span className="fw-bold me-1">{item.user}:</span>
                                        <span>
                                            {item.comment}
                                        </span>
                                    </>
                                    :
                                    <Spin style={{ color: "#fff" }} />
                                }
                            </CommentDiv>
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
        </>
    )
}

export default Comments