// src/components/PageWrapper.jsx
import React, { useState, useEffect } from 'react';

export default function PageWrapper({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
}
