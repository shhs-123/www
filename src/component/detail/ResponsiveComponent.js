import React, { useState, useEffect } from 'react';

function ResponsiveComponent() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ padding: isMobile ? '20px' : '50px' }}>
      {isMobile ? 'Mobile View' : 'Desktop View'}
    </div>
  );
}

export default ResponsiveComponent;