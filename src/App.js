import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Appointment from './components/header/appointment/Appointment';
import Contact from './components/header/contact/Contact';
import AboutUs from './components/header/aboutUs/AboutUs';
import Landing from './components/header/landing/Landing';
import Prices from './components/header/prices/Prices';

function App() {
  return (

    <div className="App">

      <Header />
      <Landing />
      <AboutUs />
      <Appointment />
      <Prices />
      <Contact />




    </div>

  );
}

export default App;
