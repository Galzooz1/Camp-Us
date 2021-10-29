import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import LoginForm from './loginForm';


const Login = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const modalRef = useRef(null);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="d-flex justify-content-center">
            <Button ref={modalRef} type="primary" onClick={showModal}>
                Login
            </Button>
            <LoginForm isModalVisible={isModalVisible} showModal={showModal} handleOk={handleOk} handleCancel={handleCancel} />
        </div>
    )
}

export default Login