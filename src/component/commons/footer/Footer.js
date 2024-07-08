import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div style={{
      height: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      backgroundColor: '#ABB2B9',
      color: '#fff',
      textAlign: 'center'
    }}>
      <p style={{ margin: '5px' }}>Www <FontAwesomeIcon icon={faCat} style={{ fontSize: '24px', color: '#697FBF' }} /></p>
      <p style={{ margin: '5px' }}>&copy; 2024 Www. All rights reserved.</p>
    </div>
  );
}

export default Footer;
