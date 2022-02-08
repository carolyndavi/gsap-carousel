import React, { Component } from 'react'
import styles from './Page.module.css'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import Image from '../elements/Image/Image'
import WeatherCurrent from '../components/WeatherApp/WeatherCurrent/WeatherCurrent'
import WeatherForecast from '../components/WeatherApp/WeatherForecast/WeatherForecast'
import WeatherCurrentCard from '../elements/Cards/WeatherCurrentCard/WeatherCurrentCard'
import WeatherForecastCard from '../elements/Cards/WeatherForecastCard/WeatherForecastCard'
import Preview from '../components/Preview/Preview'
import ErrorNotice from '../components/ErrorNotice/ErrorNotice'
import Footer from '../components/Footer/Footer'

class Page extends Component {
  state = {
    searchBarInput: '',
    temperature: '',
    description: '',
    predictability: '',
    city: '',
    country: '',
    longitude: '',
    latitude: '',
    error: false,
  }

  searchBarHandler = (event) => {
    this.setState({
      searchBarInput: event.target.value,
    })
  }

  tryAgainHandler = () => {
    this.setState({
      searchBarInput: '',
      temperature: '',
      description: '',
      predictability: '',
      city: '',
      country: '',
      longitude: '',
      latitude: '',
      error: false,
    })
  }

  fetchWeather = async (event) => {
    event.preventDefault()
    const city = event.target.elements.city.value
    const api_key = process.env.REACT_APP_WEATHER_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

    this.setState(
      {
        temperature: '',
        description: '',
        predictability: '',
        city: '',
        country: '',
        longitude: '',
        latitude: '',
        error: false,
      },
      () => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            if (data.cod === 200) {
              this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                predictability: data.predictability,
                city: data.name,
                country: data.sys.country,
                longitude: data.coord.lon,
                latitude: data.coord.lat,
              })
              console.log(data)
            } else {
              throw data.cod
            }
          })
          .catch((error) => {
            console.log(error)
            this.setState({
              error: true,
            })
          })
      }
    )
  }

  render() {
    let currentWeather = <Preview />
    if (this.state.error) {
      currentWeather = <ErrorNotice onClickHandler={this.tryAgainHandler} />
    } else if (this.state.temperature !== '') {
      currentWeather = (
        <WeatherCurrent
          temperature={this.state.temperature}
          description={this.state.description}
          city={this.state.city}
          country={this.state.country}
        />
      )
    }

    let forecastWeather = <Preview />
    if (this.state.error) {
      forecastWeather = <ErrorNotice onClickHandler={this.tryAgainHandler} />
    } else if (this.state.temperature !== '') {
      forecastWeather = (
        <WeatherForecast
          temperature={this.state.temperature}
          description={this.state.description}
          city={this.state.city}
          country={this.state.country}
          latitude={this.state.latitude}
          longitude={this.state.longitude}
        />
      )
    }

    return (
      <>
        <Header />
        <SearchBar
          weatherMethod={this.fetchWeather}
          value={this.state.searchBarInput}
          onChangeHandler={this.searchBarHandler}
          error={this.state.error}
        />
        <div className={styles.PageWrapper}>
          <Image />
          <WeatherCurrentCard>{currentWeather}</WeatherCurrentCard>
          <WeatherForecastCard>{forecastWeather}</WeatherForecastCard>
        </div>
        <Footer />
      </>
    )
  }
}

export default Page
