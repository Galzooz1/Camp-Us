import { Spin, Tooltip } from 'antd';
import { toJS } from 'mobx';
import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import storeComment from '../../stores/commentsStore';
import storeLogin from '../../stores/loginStore';
import storeUsers from '../../stores/usersStore';

let Filter = require('bad-words');
let filter = new Filter();

const CommentDiv = styled.div`
background-color: #AED4FF;
width: 100%;
display:flex;
justify-content:space-between;
`

export const IconDiv = styled.div`
cursor:pointer;
font-size:1.1rem;
margin: 0 4px;
`

const Comments = ({ comments }) => {
    const commentLikes = (item) => {
        let userLiked;
        console.log(toJS(item))
        item.usersLiked.values.forEach(like => {
            if (like.mapValue.fields.userId.stringValue === localStorage["user_id"]) {
                userLiked = true;
            }
        })
        if (!userLiked) {
            return (
                <Tooltip title="Like">
                    <i className="far fa-thumbs-up text-primary"></i>
                </Tooltip>
            )
        } else {
            return (
                <Tooltip title="Unlike">
                    <i className="far fa-thumbs-down text-danger"></i>
                </Tooltip>
            ) 
        }
    }
    return (
        <>
            {comments.length ?
                comments.reverse().map((item, i) => {
                    return (
                        <Fragment key={item.commentId}>
                            <CommentDiv className="commentPill rounded-pill border shadow p-2">
                                {item ?
                                    <>
                                        <div>
                                            <span className="fw-bold me-1">{item.user}:</span>
                                            <span>
                                                {filter.clean(item.comment)}
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            {item.likes > 0 &&
                                                <Tooltip title={item.likes > 1 ? `${item.usersLiked.values[0].mapValue.fields.user.stringValue} And ${item.likes - 1} more liked this` : `${item.usersLiked.values[0].mapValue.fields.user.stringValue} liked this`}>
                                                    <span className="rounded-circle mx-2 bg-primary px-2 fw-bold">{item.likes}</span>
                                                </Tooltip>
                                            }
                                                <IconDiv onClick={() => {
                                                    if (!localStorage["user_token"]) {
                                                        toast.error("Please Login!");
                                                    } else {
                                                        storeComment.likeComment(localStorage["user_id"], localStorage["user"], item.commentId, item.countryName, item.activity)
                                                    }
                                                }}>
                                                    {commentLikes(item)}
                                                </IconDiv>
                                            {storeLogin.isLogged ?
                                                (localStorage["user_id"] === item.userId || storeLogin.isAdmin) &&
                                                <Tooltip title="Delete">
                                                    <IconDiv onClick={() => {
                                                        if (window.confirm("Are you sure you want to delete this message?")) {
                                                            storeComment.deleteComment(item.commentId, item.countryName, item.activity);
                                                        }
                                                    }}>
                                                        <i className="far fa-times-circle text-danger"></i>
                                                    </IconDiv>
                                                </Tooltip>

                                                :
                                                null
                                            }
                                        </div>
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