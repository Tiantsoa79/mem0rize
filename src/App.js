import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Home from './pages/Home';
import Prompt from './pages/Prompt';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <>
    <BrowserRouter>
     <div className='container'>
       <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Générer" element={<Prompt />} />
        <Route path="/FAQ" element={<FAQPage />} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
