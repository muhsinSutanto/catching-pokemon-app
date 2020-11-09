import React from 'react';
import logo from '../assets/images/pokemon-logo.png'
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Navbar = () => {
    return (
        <Header style={{display: "flex"}}>
            <div className='logo'>
                <img src={logo} />
            </div>

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Pokemon Bank</Menu.Item>
                <Menu.Item key="2">My Pokemon</Menu.Item>
            </Menu>
        </Header>
    );
}

export default Navbar;