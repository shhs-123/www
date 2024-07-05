import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import logoImage from '../../images/logo.png';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: 'white', width: '100%' }}>
      <Menu mode="horizontal" style={{ lineHeight: '64px', justifyContent: 'center'}}>
        <Menu.Item key="home">
          <Link to="/">
            <img src={logoImage} alt="Logo" style={{ height: '75px', marginRight: '10px', marginBottom:'-20px' }} />
          </Link>
        </Menu.Item>

        <Menu.Item key="marketplace">
          <Link to="/marketplace">MARKETPLACE</Link>
        </Menu.Item>
        <Menu.Item key="whitepaper">
          <Link to="/whitepaper">WHITEPAPER</Link>
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
    </div>
  );
};

export default Navbar;
