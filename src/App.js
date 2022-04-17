import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Appointment from './components/header/appointment/Appointment';
import Contact from './components/header/contact/Contact';
import AboutUs from './components/header/aboutUs/AboutUs';

function App() {
  return (

    <div className="App">
      <Header />
      <AboutUs />
      <Appointment />
      <Contact />




    </div>

  );
}

export default App;
