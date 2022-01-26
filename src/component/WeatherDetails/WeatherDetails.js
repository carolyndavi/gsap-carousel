import React, { useEffect, useState } from 'react'
import styles from './WeatherDetails.module.css'
import dateformat from 'dateformat'
import Clear from '../../assets/images/Clear.svg'

const WeatherDetails = (props) => {
  const { weather } = props
  const today = new Date()

  // // second to min convert
  let sunriseSec = weather.sys.sunrise
  let sunrise = new Date(sunriseSec * 1000)
  let timeSunrise = `${sunrise.getHours()}:${sunrise.getMinutes()}`

  let sunsetSec = weather.sys.sunset
  let sunset = new Date(sunsetSec * 1000)
  let timeSunset = `${sunset.getHours()}:${sunset.getMinutes()}`

  // cloud img
  let weatherMode = weather.weather[0].main

  return (
    <div className={styles.WeatherDetailsWrapper}>
      <div className={styles.WeatherIconWrapper}>
        <img
          src={require(`../../assets/images/Clear.svg`).default}
          className={styles.Icon}
        />
      </div>
      <div className={styles.WeatherDataWrapper}>
        <div className={styles.TemperatureWrapper}>
          {weather.main.temp}
          <span className={styles.TemperatureSymbol}>&deg;C &nbsp;</span>
          <div className={styles.TemperatureMode}>{weatherMode}</div>
        </div>
        <div
          className={styles.DescriptionWrapper}
        >{`${weather.name} , ${weather.sys.country}`}</div>
        <div className={styles.DateWrapper}>
          {dateformat(today, 'dddd, mmmm dd')}
        </div>
      </div>
    </div>
  )
}

export default WeatherDetails
