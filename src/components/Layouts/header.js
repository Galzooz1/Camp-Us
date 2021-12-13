import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, CrownFilled } from '@ant-design/icons';
import Login from '../Login/login';
import { observer } from 'mobx-react';
import storeLogin from '../../stores/loginStore';
import './css/header.css';
import CampusLogo from '../../assets/campUsLogo.png'
import { useHistory } from 'react-router';
import AuthUser from '../Auth/authUser';


const { SubMenu } = Menu;


const Header = (props) => {
    const [current, setCurrent] = useState('mail');
    const history = useHistory();

    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    console.log(storeLogin.isAdmin);
    console.log(storeLogin.isLogged);
    return (
        <header className="text-white py-5">
            <AuthUser />
            <div className="container d-flex justify-content-around align-items-center">
                <div className="col-lg-3">
                    <div className="col-lg-3">
                        <img onClick={() => history.push("/")} src={CampusLogo} className="header-logo" alt="logo" />
                    </div>
                </div>
                <nav className="col-lg-6">
                    <Menu className="header-menu" onClick={handleClick} selectedKeys={current} mode="horizontal">
                        <Menu.Item onClick={() => history.push("/")} key="mail" icon={<AppstoreOutlined />}>
                            Home
                        </Menu.Item>
                        <Menu.Item onClick={() => history.push("/contact")} key="app" icon={<MailOutlined />}>
                            Contact Us
                        </Menu.Item>
                        {storeLogin.isAdmin &&
                            <Menu.Item onClick={() => history.push("/admin")} key="Admin" icon={<CrownFilled />}>
                                Admin Panel
                            </Menu.Item>
                        }
                    </Menu>
                </nav>
                {localStorage["user_token"] ?
                    <>
                        <div className="d-flex justify-content-around align-items-center col-lg-2">
                            <Button onClick={() => { storeLogin.onLogoutRequest(); history.go(0) }} type="primary" danger>Log out</Button>
                        </div>
                    </>
                    :
                    <div className="col-lg-3">
                        <Login />
                    </div>
                }
            </div>

        </header>
    )
}

export default observer(Header)