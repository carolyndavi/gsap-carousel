import { useEffect, useState } from 'react'
import styles from './WeatherForecast.module.css'
import { getDays } from '../../../helpers/helper'

function WeatherForecast(props) {
  const { latitude, longitude } = props
  const [forecastData, setForecastData] = useState([])
  const api_key = process.env.REACT_APP_WEATHER_API_KEY

  let dayCounter = -1
  const weeklyDays = getDays()

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${api_key}&units=metric`
    )
      .then((response) => response.json())
      .then((result) => {
        setForecastData(result.daily)
        console.log(result.daily)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [latitude, longitude])

  return (
    <div className={styles.ForecastWrapper}>
      {forecastData.map((data, key) => {
        dayCounter = dayCounter + 1
        return (
          <>
            <div className={styles.ForecastItem}>
              <div className={styles.Day}>{dayCounter === 0}</div>
              <div className={styles.Icon}>
                <img
                  src={require(`../../../assets/${data.weather[0].description}.svg`)}
                />
              </div>
              <span className={styles.Day}>{weeklyDays[dayCounter]}</span>
              <div className={styles.Temperature}>
                {Math.round(data.temp.day)}
                <span className={styles.TemperatureSymbol}>&deg;C &nbsp;</span>
              </div>
              <div className={styles.Description}>
                {data.weather[0].description}
              </div>
            </div>
            <hr />
          </>
        )
      })}
    </div>
  )
}

export default WeatherForecast
