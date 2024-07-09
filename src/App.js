import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Footer from './component/commons/footer/Footer';
import LandingPage from './component/landingpage/Landingpage';
import Whitepaper from './component/detail/Whitepaper';


const { Header, Content } = Layout;

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Whitepaper" element={<Whitepaper />} />
      </Routes>
      <Footer />
    </Router>
  );
}



export default App;
