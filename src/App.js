import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/style.css';
import './styles/App.css';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import FurnitureSelection from './pages/furnitureSelection/FurnitureSelection';
import { useSelector, useDispatch } from 'react-redux';
import FurnitureCalculator from './components/furnitureCalculator/FurnitureCalculator';
import FurnitureList from './components/furnitureList/FurnitureList';

function App() {

  const dispatch = useDispatch();
  const resize = useSelector(state => state.resize);

  const resizeScreen = () => {

    const resize = () => {
      if(window.innerWidth < 1200){
          dispatch({type: 'RESIZE', payload: false});
      } else {
          dispatch({type: 'RESIZE', payload: true})
      }
    }

    resize()

    window.addEventListener("resize", function(){
      resize()
    });

  }

  useEffect(resizeScreen, []);

  return (
    <BrowserRouter>
      <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/furniture-selection" element={<FurnitureSelection />} />
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
