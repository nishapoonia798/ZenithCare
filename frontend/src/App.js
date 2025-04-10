import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
        <div className='Navlist'>
          <Header/>
          <Navbar/>
          <Footer/>
        </div>
      
  );
}

export default App;

