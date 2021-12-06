import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
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
    return (
        <header className="text-white py-5">
            <AuthUser />
            <div className="container d-flex justify-content-around align-items-center">
                <div className="col-lg-3">
                    <div className="col-lg-3">
                        <img onClick={() => history.push("/")} src={CampusLogo} className="header-logo" alt="logo" />
                    </div>
                </div>
                <nav className="col-lg-7">
                    <Menu className="header-menu" onClick={handleClick} selectedKeys={current} mode="horizontal">
                        <Menu.Item onClick={() => history.push("/")} key="mail" icon={<AppstoreOutlined />}>
                            Home
                        </Menu.Item>
                        <Menu.Item onClick={() => history.push("/contact")} key="app" icon={<MailOutlined />}>
                            Contact Us
                        </Menu.Item>
                        <SubMenu key="SubMenu" icon={"🔻"} title=" Choose Your Land 🔻">
                            <Menu.ItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                    </Menu>
                </nav>
                {localStorage["user_token"] ?
                    <>
                        <div className="d-flex justify-content-around align-items-center col-lg-2">
                            <Button onClick={() => storeLogin.onLogoutRequest()} type="primary" danger>Log out</Button>
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