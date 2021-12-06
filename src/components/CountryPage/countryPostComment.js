import React from 'react';
import { Form, Input, Button, Tooltip } from 'antd';
import { observer } from 'mobx-react-lite';
import storeCountry from '../../stores/countryPageStore';

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
            <div className="bg-warning p-4 rounded-pill">
                <Form
                    form={form}
                    name="basic"
                    onFinish={onFinish}
                    className="d-flex justify-content-between"
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
                    <Form.Item
                        name="comment"
                        label="Add new comment"
                        rules={[{ required: true, message: 'Please add text!' }]}
                        className="w-100"
                    >
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>
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
                </Form>
            </div>
        </>
    )
}

export default observer(PostComment)