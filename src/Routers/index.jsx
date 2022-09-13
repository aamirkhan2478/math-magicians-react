import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Layouts';
import CalculatorPage from '../Layouts/Pages/CalculatorPage';
import HomePage from '../Layouts/Pages/HomePage';
import NotFound from '../Layouts/Pages/NotFound';
import QuotePage from '../Layouts/Pages/QuotePage';

const Routers = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<QuotePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Routers;
