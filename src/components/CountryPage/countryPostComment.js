import React from 'react';
import { Form, Input, Button, Tooltip } from 'antd';
import { observer } from 'mobx-react-lite';

const PostComment = ({ countryName, onPostComment, activityName }) => {
    const [form] = Form.useForm();

    React.useEffect(() => {
        form.setFieldsValue({
            country_name: countryName,
            activity: activityName
        });
    }, [countryName, activityName, form])

    const onFinish = (commentArgs) => {
        onPostComment(commentArgs);
        form.resetFields();
        form.setFieldsValue({
            country_name: countryName,
            activity: activityName
        })
    }

    return (
        <>
            <div className="postcomment">
                <Form
                    form={form}
                    name="basic"
                    onFinish={onFinish}
                    className="postcomment__form"
                >
                    <Form.Item
                        name="country_name"
                        hidden={true}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="activity"
                        hidden={true}
                    >
                        <Input />
                    </Form.Item>
                    <span className="postcomment__label">Add new comment</span>
                    <Form.Item
                        name="comment"
                        rules={[{ required: true, message: 'Please add text!' }]}
                        className="postcomment__input-wrapper"
                    >
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>
                    <div className="postcomment__btn">
                        {localStorage["user_token"] ?
                            <Button type="primary" htmlType="submit" className="ms-2">
                                Post
                            </Button>
                            :
                            <Tooltip defaultVisible={!localStorage["user_token"] && false} title="Login to post">
                                <Button disabled={!localStorage["user_token"] && true} type="primary" htmlType="submit" className="ms-2">
                                    Post
                                </Button>
                            </Tooltip>
                        }
                    </div>
                </Form>
            </div>
        </>
    )
}

export default observer(PostComment)