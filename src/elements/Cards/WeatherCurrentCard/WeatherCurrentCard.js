import styles from './WeatherCurrentCard.module.css'

const WeatherCurrentCard = (props) => {
  return <div className={styles.CardWrapper}>{props.children}</div>
}

export default WeatherCurrentCard
