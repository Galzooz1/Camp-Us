import React, {  useState } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import LoginForm from './loginForm';
import { useHistory } from 'react-router';


const Login = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    // const history = useHistory();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        // history.push("/");
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="d-flex justify-content-center">
            <Button type="primary" onClick={showModal}>
                Login
            </Button>
            <LoginForm isModalVisible={isModalVisible} showModal={showModal} handleOk={handleOk} handleCancel={handleCancel} />
        </div>
    )
}

export default Login