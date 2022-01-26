import React, { useEffect, useState } from 'react'
import styles from './Page.module.css'
import axios from 'axios'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import Preview from '../Preview/Preview'
import Card from '../../elements/Card/Card'
import Footer from '../Footer/Footer'
import WeatherDetails from '../WeatherDetails/WeatherDetails'

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState('')

  let getData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      )
      .then((response) => {
        setWeather(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.PageWrapper}>
      <Header />
      <main className={styles.PageMain}>
        <SearchBar setLocation={setLocation} fetchWeather={getData} />
        <Card>
          {weather ? <WeatherDetails weather={weather} /> : <Preview />}
        </Card>
      </main>
      <Footer />
    </div>
  )
}

export default App
