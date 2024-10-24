import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Booking from './Components/Booking';
import Complete from './Components/Complete';
import Confirm from './Components/Confirm';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
