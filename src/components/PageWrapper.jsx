// src/components/PageWrapper.jsx
import React, { useState, useEffect } from 'react';

export default function PageWrapper({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in on mount
    setVisible(true);
    return () => {
      // Optional: reset on unmount
      setVisible(false);
    };
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
