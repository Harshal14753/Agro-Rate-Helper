import './App.css'
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer /> 
    </>
  )
}

export default App
