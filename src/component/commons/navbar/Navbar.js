import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <Menu mode="horizontal" style={{ lineHeight: '64px' }}>
      <Menu.Item key="marketplace">
        <Link to="/marketplace">MARKETPLACE</Link>
      </Menu.Item>
      <Menu.Item key="Whitepaper">
        <Link to="/Whitepaper">WHITEPAPER</Link>
      </Menu.Item>
      <Menu.Item key="news">
        <Link to="/news">NEWS</Link>
      </Menu.Item>
      <Menu.Item key="support">
        <Link to="/support">SUPPORT</Link>
      </Menu.Item>
      <Menu.Item key="community">
        <Link to="/community">COMMUNITY</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link to="/login">로그인</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;

