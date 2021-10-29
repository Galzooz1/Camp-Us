import React, { useState } from 'react';
import { Modal } from 'antd';
import { Form, Input, Button } from 'antd';
import { toast } from 'react-toastify';
import { doApiMethod, URL_API } from '../services/apiService';
import RegistrationForm from './registrationForm';

const LoginForm = ({ handleCancel, handleOk, isModalVisible }) => {

    const [isSignup, setIsSignup] = useState(false);
    const [citiesData, setCitiesData] = useState(null);

    //בקשה לשרת
    const onLoginRequested = async (LoginArgs) => {
        let url = URL_API + "/login";
        let data = await doApiMethod(url, "POST", LoginArgs);
        if (data.token) {
            localStorage.setItem("user_token", data.token);
            // let infoUrl = URL_API + "/userInfo";
            // let infoData = await doApiMethod(infoUrl, "GET");
            // console.log(infoData);
            toast.success("Welcome, " + LoginArgs.email);
        } else {
            toast.error("Username or password are incorrect!");
        }
        console.log("User Logged in: ", data);
    }

    const onFinish = (LoginArgs) => {
        console.log('Login Args:', LoginArgs);
        onLoginRequested(LoginArgs);
    };

    const getCityData = async () => {
        if (citiesData === null) {
            try {
                fetch("https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba")
                    .then(res => res.json())
                    .then(
                        (result) => {
                            console.log(result);
                            setCitiesData(result.records);
                        })
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {!isSignup ?
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    :
                    <RegistrationForm />
                }
                <Button onClick={() => {
                    setIsSignup(wasIsSignup => !wasIsSignup);
                    if (!isSignup) {
                        getCityData();
                    }
                }} type="secondary" className="mx-3 mt-4" htmlType="button">
                    {!isSignup ?
                        `Sign Up` : `Login`
                    }
                </Button>
            </Modal>
        </>
    )
}

export default LoginForm