// Whitepaper 스타일 맞추기 전 버전
// import React from 'react';
// import { Collapse, Button } from 'antd';
// import { RightOutlined } from '@ant-design/icons';
// import whitepaperimage from '../images/whitepaper.png';
// import MyBreadcrumb from './Breadcrumb';
// import Navbar from '../../component/commons/navbar/Navbar';

const { Panel } = Collapse;

const customExpandIcon = ({ isActive }) => (
  <RightOutlined rotate={isActive ? 90 : 0} style={{ fontSize: '16px', float: 'right' }} />
);

const Whitepaper = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '45px', boxSizing: 'border-box' }}>
      {/* <div style={{ marginTop: '20px', boxSizing: 'border-box', minHeight: '100vh' }}> */}
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0px' }}>
        <MyBreadcrumb />
      </div>
      <h1 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', textAlign: 'center', marginTop: '20px', width: '80%', margin: '0 auto' }}>Whitepaper</h1>

      <div style={{ display: 'flex', minHeight: '100vh', padding: '20px', boxSizing: 'border-box' }}>
        <div style={{ width: '18%', padding: '50px 20px', marginRight: '5px', top: '218px', left: '90px', backgroundColor: 'white' }}>
          <Collapse
            bordered={false}
            style={{ backgroundColor: 'white' }}
            expandIcon={customExpandIcon}
            expandIconPosition="end"
          >
            <Panel header="About Www" key="1" style={{ borderBottom: '1px solid #ccc' }}>
              <p>About Www</p>
            </Panel>
            <Panel header="Technology" key="2" style={{ borderBottom: '1px solid #ccc' }}>
              <p>Technology</p>
            </Panel>
            <Panel header="Roadmap" key="3" style={{ borderBottom: '1px solid #ccc' }}>
              <p>Roadmap</p>
            </Panel>
            <Panel header="Team" key="4" style={{ borderBottom: '1px solid #ccc' }}>
              <p>Team</p>
            </Panel>
            <Panel header="Guide" key="5" style={{ borderBottom: '1px solid #ccc' }}>
              <p>Guide</p>
            </Panel>
          </Collapse>
        </div>
        <div style={{ flexGrow: 1, padding: '20px', textAlign: 'center', marginLeft: '25%', borderLeft: '1px solid #ccc', height: 'calc(95vh - 138px)' }}>
          <img src={whitepaperimage} alt="Whitepaper Background" style={{ width: '1200px', height: 'auto', marginBottom: '20px' }} />
          <p>Building World Class Swap Experiences Together</p>
          <p>Our goal is simple: Help you give world class experiences for your users with as little work as possible, regardless of your use case or needs.</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
            <Button type="primary" style={{ margin: '0 10px', backgroundColor: 'rgba(0, 123, 255, 0.1)', color: 'rgba(0, 123, 255, 1)', border: '1px solid rgba(0, 123, 255, 0.5)' }}>Previous Page</Button>
            <Button type="primary" style={{ margin: '0 10px', backgroundColor: 'rgba(0, 123, 255, 0.1)', color: 'rgba(0, 123, 255, 1)', border: '1px solid rgba(0, 123, 255, 0.5)' }}>Next Page</Button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

// export default Whitepaper;