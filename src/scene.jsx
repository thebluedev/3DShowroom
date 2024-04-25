import React from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Spline 
        scene="https://prod.spline.design/6b9TUBqaW5LNCotH/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
