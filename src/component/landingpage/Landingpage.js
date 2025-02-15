import React from 'react';
import catImage from '../images/cat.png';
import mainImage from '../images/main.png';
// import logoImage from '../images/logo.png';
import Navbar from '../../component/commons/navbar/Navbar';


const LandingPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', marginTop: '80px',boxSizing: 'border-box'}}>
      <Navbar />
      <div style={{ width: '100%', maxWidth: '1200px', marginBottom: '100px' }}>
        <img src={mainImage} alt="Main Visual" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 20px', maxWidth: '800px' }}>
        <div style={{ width: '70%' }}>
          <h1>"Www우주 고양이"</h1>
          <p>"Www우주 고양이" 프로젝트는 우주 탐험을 고양이와 함께 즐기는 색다른 경험을 제안합니다. 고양이를 위한 안전한 우주선과 환경을 조성하여 고양이의 우주 탐사 정신을 자극하고자 합니다. 이를 통해 고양이 팬덤을 형성하고, 코인과 NFT를 통해 커뮤니티를 확장하고자 합니다. 함께 우주를 탐험해 보시겠어요?</p>
        </div>
        <div style={{ width: '20%', marginBottom: '100px' }}>
          <img src={catImage} alt="우주 고양이" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
        </div>
      </div>
    </div>

  );
};

export default LandingPage;












