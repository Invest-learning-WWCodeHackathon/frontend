import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Quizzes from './Quizzes';
import Footer from './Footer';
import AboutPage from './About';
import Dashboard from './StockMarketDashboard';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/quizzes" element={<Quizzes/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
