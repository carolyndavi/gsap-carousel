import styles from './WeatherCurrent.module.css'
import Temperature from '../Temperature/Temperature'
import Description from '../Description/Description'
import Date from '../Date/Date'
import Icon from '../../../elements/Icon/Icon'

const WeatherCurrent = (props) => {
  const { city, country, description } = props

  return (
    <div className={styles.WeatherDetailsWrapper}>
      <div className={styles.WeatherIconWrapper}>
        <Icon description={description} />
      </div>
      <div className={styles.WeatherDataWrapper}>
        <Description city={city} country={country} description={description} />
        <Date />
        <Temperature temperature={props.temperature} />
      </div>
    </div>
  )
}

export default WeatherCurrent
