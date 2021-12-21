import React, { useState } from 'react';
import 'antd/dist/antd.css';
import LoginForm from './loginForm';
import { useHistory } from 'react-router';


const Login = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const history = useHistory();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        history.push("/");
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <div onClick={showModal} className="navigation__item">
                <div className="navigation__link">
                    <i className="fas fa-sign-in-alt navigation__icon"></i>
                    Login
                </div>
            </div>
            <LoginForm isModalVisible={isModalVisible} showModal={showModal} handleOk={handleOk} handleCancel={handleCancel} />
        </>
    )
}

export default Login