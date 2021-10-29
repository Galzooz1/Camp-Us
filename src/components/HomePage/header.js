import React, { useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import Login from '../Login/login';

const { SubMenu } = Menu;


const Header = (props) => {
    const [current, setCurrent] = useState('mail');

    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
      };
    return (
        <header className="bg-dark text-white p-5">
            <div className="container d-flex justify-content-evenly align-items-center">
                <div className="p-4 bg-warning">Logo</div>
            <nav className="col-lg-6 mx-auto">
            <Menu theme="dark" style={{ lineHeight: '64px' }} className="d-flex justify-content-around" onClick={handleClick} selectedKeys={current} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    Navigation One
                </Menu.Item>
                <Menu.Item key="app" icon={<AppstoreOutlined />}>
                    Navigation Two
                </Menu.Item>
                <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
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
            <Login />
            </div>

        </header>
    )
}

export default Header