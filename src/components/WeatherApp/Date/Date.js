import dateformat from 'dateformat'
import styles from './Date.module.css'

const date = () => {
  const today = new Date()

  return (
    <div className={styles.DateWrapper}>
      {dateformat(today, 'dddd, mmmm dd')}
    </div>
  )
}

export default date
