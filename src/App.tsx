import React from 'react';
import Top from './components/top';
import Header from './components/Header';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Looms from './components/pages/Looms';


const App: React.FC = () => {
  return (
      <div>
         <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Top />} />
              <Route path="/Looms" element={<Looms />} />
            </Routes>
          </BrowserRouter> 
      </div>
  );
};

export default App;
