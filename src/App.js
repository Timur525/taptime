import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/style.css';
import './styles/App.css';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import FurnitureSelection from './pages/furnitureSelection/FurnitureSelection';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/furniture-selection" element={<FurnitureSelection />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
