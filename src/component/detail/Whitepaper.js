import React from 'react';
import { Collapse, Button } from 'antd';
import whitepaperimage from '../images/whitepaper.png';

const { Panel } = Collapse;

const Whitepaper = () => {
  return (
    <div style={{ marginTop: '20px', boxSizing: 'border-box' }}>
      <h1 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', textAlign: 'center', marginTop: '20px', width: '80%', margin: '0 auto' }}>Whitepaper</h1>

      <div style={{ display: 'flex', minHeight: '100vh', padding: '20px', boxSizing: 'border-box'}}>
        <div style={{ width: '30%', padding: '50px 20px', marginRight: '5px', position: 'fixed', top: '138px', left: '40px' }}>
          <Collapse>
            <Panel header="About Www" key="1">
              <p>About Www</p>
            </Panel>
            <Panel header="Technology" key="2">
              <p>Technology</p>
            </Panel>
            <Panel header="Roadmap" key="3">
              <p>Roadmap</p>
            </Panel>
            <Panel header="Team" key="4">
              <p>Team</p>
            </Panel>
            <Panel header="Guide" key="5">
              <p>Guide</p>
            </Panel>
          </Collapse>
        </div>
        <div style={{ flexGrow: 1, padding: '20px', textAlign: 'center', marginLeft: '32%', borderLeft: '1px solid #ccc', height: 'calc(95vh - 138px)' }}>
          <img src={whitepaperimage} alt="Whitepaper Background" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
          <p>Building World Class Swap Experiences Together</p>
          <p>Our goal is simple: Help you give world class experiences for your users with as little work as possible, regardless of your use case or needs.</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
          <Button type="primary" style={{ margin: '0 10px', backgroundColor: 'rgba(0, 123, 255, 0.1)', color: 'rgba(0, 123, 255, 1)', border: '1px solid rgba(0, 123, 255, 0.5)' }}>Previous Page</Button> <Button type="primary" style={{ margin: '0 10px', backgroundColor: 'rgba(0, 123, 255, 0.1)', color: 'rgba(0, 123, 255, 1)', border: '1px solid rgba(0, 123, 255, 0.5)' }}>Next Page</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
