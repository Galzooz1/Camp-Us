import React from 'react';
import { Modal } from 'antd';
import { Form, Input, Button } from 'antd';
import { URL_API } from '../../services/apiService';
import RegistrationForm from './registrationForm';
import { observer } from 'mobx-react';
import storeLogin from '../../stores/loginStore';

const LoginForm = ({ handleCancel, handleOk, isModalVisible }) => {

    const onFinish = async(LoginArgs) => {
        let url = URL_API + "/login";
        let res = await storeLogin.onLoginRequest(LoginArgs, url);
        if(res === "success") handleOk();
    };

    return (
        <>
            <Modal title="Sign-In" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {!storeLogin.signupVisble ?
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
                    <RegistrationForm handleOk={handleOk} />
                }
                <Button onClick={() => storeLogin.setSignup()} type="secondary" className="mx-3 mt-4" htmlType="button">
                    {!storeLogin.signupVisble ?
                        `Sign Up` : `Login`
                    }
                </Button>
            </Modal>
        </>
    )
}

export default observer(LoginForm)