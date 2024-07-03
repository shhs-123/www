import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const Whitepaper = () => {
  return (

    <div style={{ textAlign: 'center' }}>
      <h1>Welcome Www!</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>

        <img src="/image/whitepaper.png" alt="Whitepaper Background" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
        <p>Building World Class Swap Experiences Together
          Our goal is simple: Help you give world class experiences for your users with as little work as possible, regardless of your use case or needs.</p>
      </div>
      <Collapse defaultActiveKey={['1']} style={{ width: '80%' }}>
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
  );
};

export default Whitepaper;
