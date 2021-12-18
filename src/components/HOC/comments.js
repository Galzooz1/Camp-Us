import { Spin, Tooltip } from 'antd';
import { toJS } from 'mobx';
import React from 'react';
import { Fragment } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import storeComment from '../../stores/commentsStore';
import storeLogin from '../../stores/loginStore';

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
font-size:1.7rem;
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
                    <i className="far fa-thumbs-up comment__likes-icon text-primary"></i>
                </Tooltip>
            )
        } else {
            return (
                <Tooltip title="Unlike">
                    <i className="far fa-thumbs-down comment__likes-icon text-danger"></i>
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
                            <div className="comment">
                                {item ?
                                    <>
                                        <div className="comment__inner">
                                            <div>
                                                <span className="fw-bold me-2">{item.user}:</span>
                                                <span>
                                                    {filter.clean(item.comment)}
                                                </span>
                                            </div>
                                            <div className="comment__actions">
                                                {item.likes > 0 ?
                                                    <Tooltip title={item.likes > 1 ? `${item.usersLiked.values[0].mapValue.fields.user.stringValue} And ${item.likes - 1} more liked this` : `${item.usersLiked.values[0].mapValue.fields.user.stringValue} liked this`}>
                                                        {/* <span className="comment__likes-number">{item.likes}</span> */}
                                                        <span className="comment__actions-number">
                                                            {item.likes > 1 ?
                                                                `${item.usersLiked.values[0].mapValue.fields.user.stringValue} And ${item.likes - 1} more liked this`
                                                                :
                                                                `${item.usersLiked.values[0].mapValue.fields.user.stringValue} liked this`}
                                                        </span>
                                                    </Tooltip>
                                                    :
                                                    <span className="comment__actions-number">You can be the first like</span>

                                                }
                                                <div className="comment__actions-like" onClick={() => {
                                                    if (!localStorage["user_token"]) {
                                                        toast.error("Please Login!");
                                                    } else {
                                                        storeComment.likeComment(localStorage["user_id"], localStorage["user"], item.commentId, item.countryName, item.activity)
                                                    }
                                                }}>
                                                    {commentLikes(item)}
                                                </div>
                                                {storeLogin.isLogged &&
                                                    (localStorage["user_id"] === item.userId || storeLogin.isAdmin) &&
                                                    <Tooltip title="Delete">
                                                        <div className="comment__actions-delete" onClick={() => {
                                                            if (window.confirm("Are you sure you want to delete this message?")) {
                                                                storeComment.deleteComment(item.commentId, item.countryName, item.activity);
                                                            }
                                                        }}>
                                                            <i className="far fa-times-circle text-danger"></i>
                                                        </div>
                                                    </Tooltip>
                                                }
                                            </div>
                                        </div>

                                    </>
                                    :
                                    <Spin style={{ color: "#fff" }} />
                                }
                            </div>
                        </Fragment>
                    )
                })
                :
                <>
                    <div className="d-flex justify-content-center">
                        <div className="display-6 text-dark mb-4">Be the first one to comment!</div>
                    </div>
                </>
            }
            <hr className="bg-dark" />
        </>
    )
}

export default Comments