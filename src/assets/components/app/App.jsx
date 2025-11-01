import React from 'react'
import AppHeader from '../appHeader/AppHeader.jsx'
import Forecast from '../forecast/Forecast.jsx'
import CurrentWeather from '../currentWeather/CurrentWeather.jsx'
import TimeWeather from '../timeWeather/TimeWeather.jsx'
import './App.scss'

function App() {

  return (
    <>
      <AppHeader />
      <CurrentWeather />
      <TimeWeather />
      <Forecast />
    </>
  )
}

export default App;
