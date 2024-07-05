import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './component/commons/navbar/Navbar';
import LandingPage from './component/landingpage/Landingpage';
import Whitepaper from './component/detail/Whitepaper';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <Header style={{ position: 'fixed', width: '100%' }}>
          <Navbar/>
        </Header>
        <Content className="site-layout" style={{ margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Whitepaper" element={<Whitepaper />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
