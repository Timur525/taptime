import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/style.css';
import './styles/App.css';
import Main from './pages/main/Main';
import FurnitureSelection from './pages/furnitureSelection/FurnitureSelection';
import { useDispatch } from 'react-redux';
import Results from './pages/results/Results';

function App() {

  const dispatch = useDispatch();

  const resizeScreen = () => {

    const resize = () => {
      if(window.innerWidth < 767){
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

  useEffect(resizeScreen, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/furniture-selection" element={<FurnitureSelection />} />
                <Route path="/results" element={<Results />} />
            </Routes>
      </div>
    </BrowserRouter>
  );
} 

export default App;
