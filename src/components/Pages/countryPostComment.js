import React from 'react';
import { Form, Input, Button } from 'antd';
import { observer } from 'mobx-react-lite';
import storeComment from '../../stores/countryCommentStore';
import { URL_API } from '../services/apiService';

const CountryPostComment = ({countryName, onPostComment}) => {
    const [form] = Form.useForm();

    React.useEffect(() => {
        form.setFieldsValue({
            country_name: countryName
        })
    }, [countryName])

    // const onFinish = (commentArgs) => {
    //     let url = URL_API + "/comments";
    //     console.log(commentArgs);
    //     storeComment.postComment(url, commentArgs);
    // }

    return (
        <>
            <Form
                form={form}
                name="basic"
                onFinish={onPostComment}
                className="d-flex justify-content-between"
            >
                <Form.Item
                name="country_name"
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
                    <Input.TextArea showCount maxLength={50} />
                </Form.Item>
                <Button type="primary" htmlType="submit" className="ms-2">
                    Post
                </Button>
            </Form>
        </>
    )
}

export default observer(CountryPostComment)