import { useEffect, useState } from 'react'
import './WeatherForecast.css'
import { getDays } from '../../../helpers/getDays'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { IconContext } from 'react-icons'

function WeatherForecast(props) {
  const { latitude, longitude } = props
  const [forecastData, setForecastData] = useState([])
  const [clicked, setClicked] = useState(false)

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null)
    }

    setClicked(index)
  }

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
    <IconContext.Provider value={{ color: '#fff', size: '25px' }}>
      <div className='forecastWrapper'>
        <div className='forecastItem'>
          {forecastData.map((data, index) => {
            dayCounter = dayCounter + 1
            return (
              <>
                <div className='item'>
                  <div className='title' onClick={() => toggle(index)}>
                    <h3 className='day'>{weeklyDays[dayCounter]}</h3>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </div>
                  <div
                    className={clicked === index ? 'content show' : 'content'}
                  >
                    <div className='icon'>
                      <img
                        src={require(`../../../assets/${data.weather[0].description}.svg`)}
                      />
                    </div>

                    <div className='temperature'>
                      {Math.round(data.temp.day)}
                      <span className='temperatureSymbol'>&deg;C &nbsp;</span>
                    </div>
                    <div className='description'>
                      {data.weather[0].description}
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default WeatherForecast
