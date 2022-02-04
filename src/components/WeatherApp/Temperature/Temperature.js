import styles from './Temperature.module.css'

const Temperature = (props) => {
  return (
    <div className={styles.TemperatureWrapper}>
      {Math.round(props.temperature)}
      <span className={styles.TemperatureSymbol}>&deg;C &nbsp;</span>
    </div>
  )
}

export default Temperature
