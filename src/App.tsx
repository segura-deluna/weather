import React from 'react';
import { Route, Routes } from 'react-router';

import { Home } from './pages/Home/Home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Header } from './shared/Header';



function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/month-statistics' element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
