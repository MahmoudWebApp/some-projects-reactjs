import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Birthday from "./pages/birthday/Birthday";
import Tours from './pages/tours/Tours';
import Reviews from './pages/reviews/Reviews';
import Accordion from './pages/accordion/Accordion';
import Menu from './pages/menu/Menu';
import {BrowserRouter,Routes,Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />} />
    <Route path="/birthday" element={<Birthday />} />
    <Route path="/tours" element={<Tours />} />
    <Route path="/reviews" element={<Reviews/>} />
    <Route path="/accordion" element={<Accordion/>} />
    <Route path="/menu" element={<Menu/>} />
    </Routes> 
  </BrowserRouter>,
  document.getElementById('root')
);


