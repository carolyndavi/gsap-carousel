import styles from './ErrorNotice.module.css'
import Button from '../../elements/Button/Button'

const ErrorNotice = (props) => {
  return (
    <>
      <div className={styles.ErrorNoticeWrapper}>
        <h1 className={styles.NotFound404}>404</h1>
        <div className={styles.ErrorTextWrapper}>
          <h2 className={styles.NotFoundHeading}>Oops!</h2>
          <p className={styles.NotFoundDetails}>
            We can't find the city you are looking for.
          </p>
          <Button
            name='tryAgain'
            type='button'
            position='onErrorNotice'
            clicked={props.onClickHandler}
          >
            Try again
          </Button>
        </div>
      </div>
    </>
  )
}

export default ErrorNotice
