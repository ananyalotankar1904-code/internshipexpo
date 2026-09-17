import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegistrationFlow from './pages/RegistrationFlow';
import { RegistrationProvider } from './context/RegistrationContext';

function App() {
  return (
    <RegistrationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register/*" element={<RegistrationFlow />} />
        </Routes>
      </Router>
    </RegistrationProvider>
  );
}

export default App;
