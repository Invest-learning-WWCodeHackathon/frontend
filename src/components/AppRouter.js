import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Quizzes from "./Quizzes";
import Footer from "./Footer";
import AboutPage from "./About";
import Dashboard from "./StockMarketDashboard";
import Auth from "./Auth";
import News from "./News";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sign-up" element={<Auth />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<News/> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
