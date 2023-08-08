import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import AboutUs from './components/AboutUs'; // Import the AboutUs component
import Contact from './components/Contact'; // Import the Contact component

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
        <Route path='/about' element={<AboutUs />} /> {/* Add AboutUs route */}
        <Route path='/contact' element={<Contact />} /> {/* Add Contact route */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
