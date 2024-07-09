import React from 'react';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import logo1Image from '../../images/logo1.png';
import languageImage from '../../images/korea1.png'
// import { GlobalOutlined } from '@ant-design/icons';

const Navbar = () => {
  // const languageMenu = (
  //   <Menu>
  //     <Menu.Item key="en">
  //       <Link to="#" onClick={() => console.log('English selected')}>English</Link>
  //     </Menu.Item>
  //     <Menu.Item key="ko">
  //       <Link to="#" onClick={() => console.log('Korean selected')}>한국어</Link>
  //     </Menu.Item>
  //     <Menu.Item key="jp">
  //       <Link to="#" onClick={() => console.log('Japanese selected')}>日本語</Link>
  //     </Menu.Item>
  //     <Menu.Item key="cn">
  //       <Link to="#" onClick={() => console.log('Chinese selected')}>中文</Link>
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <div style={{ backgroundColor: 'blue', width: '100%', position: 'fixed', top: 0, zIndex: 1000 }}>
      <Menu mode="horizontal" style={{ width: '100%', lineHeight: '64px', justifyContent: 'center' }}>
        <Menu.Item key="home">
          <Link to="/">
            <img src={logo1Image} alt="Logo" style={{ height: '60px', marginRight: '10px', marginBottom: '-20px' }} />
          </Link>
        </Menu.Item>

        <Menu.Item key="marketplace">
          <Link to="/">MARKETPLACE</Link>
        </Menu.Item>
        <Menu.Item key="whitepaper">
          <Link to="/whitepaper">WHITEPAPER</Link>
        </Menu.Item>
        <Menu.Item key="news">
          <Link to="/">NEWS</Link>
        </Menu.Item>
        <Menu.Item key="support">
          <Link to="/">SUPPORT</Link>
        </Menu.Item>
        <Menu.Item key="community">
          <Link to="/">COMMUNITY</Link>
        </Menu.Item>


        <Menu.Item key="language">
          <Link to="/">
            <img src={languageImage} alt="language" style={{ height: '23px', marginRight: '10px', marginBottom: '-5px' }} />
          </Link>
        </Menu.Item>

        {/* <Menu.Item key="login">
          <Link to="/login">로그인</Link>
        </Menu.Item> */}

        {/* Adding the language selection dropdown */}
        {/* <Dropdown overlay={languageMenu} trigger={['click']}>
          <a href="/" onClick={(e) => e.preventDefault()} style={{ display: 'flex', alignItems: 'center' }}>
            <GlobalOutlined style={{ fontSize: '16px', color: '#fff' }} />
          </a>
        </Dropdown> */}
      </Menu>
    </div>
  );
};

export default Navbar;
