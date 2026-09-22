import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegistrationFlow from './pages/RegistrationFlow';
import { RegistrationProvider } from './context/RegistrationContext';
import Dither from './components/Dither';

import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <RegistrationProvider>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'auto' }}>
        <Dither
          waveColor={[0.050980392156862744,0.058823529411764705,0.5568627450980392]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.3}
          colorNum={11.8}
          waveAmplitude={0.1}
          waveFrequency={2.1}
          waveSpeed={0.5}
          backgroundColor={[0,0,0]}
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register/*" element={<RegistrationFlow />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </RegistrationProvider>
  );
}

export default App;
