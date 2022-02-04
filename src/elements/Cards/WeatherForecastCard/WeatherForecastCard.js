import styles from './WeatherForecastCard.module.css'

const WeatherForecastCard = (props) => {
  return <div className={styles.CardWrapper}>{props.children}</div>
}

export default WeatherForecastCard
