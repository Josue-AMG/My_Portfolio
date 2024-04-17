import React from 'react';
import './App.css';
import { MenuVar } from './Components/Menu/MenuVar';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Components/Inicio/Inicio';
import { Proyectos } from './Components/Proyectos/Proyectos';




const App = () => {
  return (
    < >
    <MenuVar />
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Inicio></Inicio>}></Route>
        <Route path={'/proyectos'} element={<Proyectos></Proyectos>}></Route>
      </Routes> 
      
    </BrowserRouter>

      
    </>
  );
}

export default App;
