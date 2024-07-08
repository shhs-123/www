import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Footer from './component/commons/footer/Footer';
import Navbar from './component/commons/navbar/Navbar';
import LandingPage from './component/landingpage/Landingpage';
import Whitepaper from './component/detail/Whitepaper';
import { createGlobalStyle } from 'styled-components';


const { Header, Content } = Layout;

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout>
        <GlobalStyle />
        <Header style={{ position: 'fixed', width: '100%', padding: '0' }}>
          <Navbar />
        </Header>

        <Content className="site-layout" style={{ marginTop: '64px', padding: '20px', width: '100%', boxSizing: 'border-box', overflow: 'auto' }}>

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Whitepaper" element={<Whitepaper />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </Router>
  );
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HakgyoansimWoojuR';
    src: url('/assets/fonts/HakgyoansimWoojuR.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'HakgyoansimWoojuR', sans-serif;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'HakgyoansimWoojuR', sans-serif;
  }

  p, a, div, span, button {
    font-family: 'HakgyoansimWoojuR', sans-serif;
  }
`;


export default App;
