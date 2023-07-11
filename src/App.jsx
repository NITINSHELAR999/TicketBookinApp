import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSlider from'./component/ImageSlider.jsx';
import MoviInfo from'./component/MoviInfo.jsx';
import SeatBook from'./component/SeatBook.jsx';
import TikitInfo from'./component/TikitInfo.jsx';
import TikitBook from'./component/TikitBook.jsx';
import Navbar from'./component/Navbar.jsx';

export default function App() {
  return (
    <div className=''>
      <BrowserRouter>
       <Navbar/>
         
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/imageSlider" element={<ImageSlider />} />
           <Route path="/tikitbook/:id" element={<TikitBook />} />
           <Route path="/moviinfo/:id" element={<MoviInfo/>} />
          <Route path="/seatbook" element={<SeatBook/>} />
           <Route path="/tikitinfo" element={<TikitInfo />} />
        </Routes>
      </BrowserRouter>


    </div>
  )

}