import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Home from './components/views/Home';
import HistoryView from './components/views/HistoryView';
import User from './components/views/User';
import Navbar from './components/common/Navbar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="history" element={<HistoryView />} />
        <Route path="user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
