import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculation from './pages/Calculation/Calculation';
import HoleCalculation from './pages/HoleCalculation/HoleCalculation'; // Новые страницы
import EdgeCalculation from './pages/EdgeCalculation/EdgeCalculation';
import CornerCalculation from './pages/CornerCalculation/CornerCalculation';
import UnitConverter from './pages/UnitConverter/UnitConverter';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/calculation" />} />
      <Route path="/calculation" element={<Calculation />} />
      <Route path="/hole-calculation" element={<HoleCalculation />} /> {/* Новый маршрут */}
      <Route path="/edge-calculation" element={<EdgeCalculation />} />
      <Route path="/corner-calculation" element={<CornerCalculation />} />
      <Route path="/unit-converter" element={<UnitConverter />} />
    </Routes>
  );
}

export default App;
