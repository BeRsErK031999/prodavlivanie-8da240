import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculation from './pages/Calculation/Calculation'; // Импорт вашего компонента
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/calculation" />} /> {/* Перенаправление с корня на /calculation */}
      <Route path="/calculation" element={<Calculation />} />
      {/* Другие маршруты */}
    </Routes>
  );
}

export default App;
