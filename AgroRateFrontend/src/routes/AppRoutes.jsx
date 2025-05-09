import React from 'react'
import { Routes, Route } from "react-router";
import App from '../App';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AboutUs from '../pages/AboutUs';
import Gallery from '../pages/Gallery';
import MarketRate from '../pages/MarketRate';
import Bookmark from '../pages/Bookmark';
import MarketRateResult from '../pages/MarketRateResult';
import PharmaRateSearch from '../pages/PharmaRateSearch';
import WeatherSurvey from '../pages/WeatherSurvey';
import AgroStudy from '../pages/AgroStudy';
import CropPhotography from '../pages/CropPhotography';
import FarmerCalculator from '../pages/FarmerCalculator';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<App />} >
          <Route path='home' element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='gallery' element={<Gallery />} />
        </Route>

        <Route path='/user/' element={<App />} >
          <Route path='market-rate' element={<MarketRate />} />
          <Route path='bookmark' element={<Bookmark />} />
          <Route path='market-rate-result' element={<MarketRateResult />} />
          <Route path='pharma-rate' element={<PharmaRateSearch />} />
          <Route path='weather-survey' element={<WeatherSurvey />} />
          <Route path='agro-study' element={<AgroStudy />} />
          <Route path='crop-photography' element={<CropPhotography />} />
          <Route path='farmer-calculator' element={<FarmerCalculator />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes