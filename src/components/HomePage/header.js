import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import Login from '../Login/login';
import { observer } from 'mobx-react';
import storeLogin from '../../stores/loginStore';
import './css/header.css';


const { SubMenu } = Menu;


const Header = (props) => {
    const [current, setCurrent] = useState('mail');

    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <header style={{ backgroundColor:"#141414"}} className="text-white py-5">
            <div className="container d-flex justify-content-around align-items-center">
                <div className="col-lg-3">
                    <div className="logo p-4 col-lg-3">Logo</div>
                </div>
                <nav className="col-lg-7">
                    <Menu style={{ lineHeight: '88px', backgroundColor:"#263EA0" }} className="d-flex justify-content-around" onClick={handleClick} selectedKeys={current} mode="horizontal">
                        <Menu.Item key="mail" icon={<AppstoreOutlined />}>
                            Home
                        </Menu.Item>
                        <Menu.Item key="app" icon={<MailOutlined />}>
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
                {storeLogin.isLogged ?
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