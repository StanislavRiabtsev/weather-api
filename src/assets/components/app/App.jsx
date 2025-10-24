import React from 'react'
import AppHeader from '../appHeader/AppHeader.jsx'
import Forecast from '../forecast/Forecast.jsx'
import CurrentWeather from '../currentWeather/CurrentWeather.jsx'
import './App.scss'

function App() {

  return (
    <>
      <AppHeader />
      <CurrentWeather />
      <Forecast />
    </>
  )
}

export default App;
