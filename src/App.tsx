import React from 'react';
import Top from './components/top';
import Header from './components/Header';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Looms from './components/pages/Looms';
import HotelReservation from './components/pages/hotelReservation';


const App: React.FC = () => {
  return (
      <div>
         <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Top />} />
              <Route path="/Looms" element={<Looms />} />
              <Route path="/HotelReservation" element={<HotelReservation />} />
            </Routes>
          </BrowserRouter> 
      </div>
  );
};

export default App;
