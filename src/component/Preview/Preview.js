import React from 'react'
import styles from './Preview.module.css'

const Preview = () => {
  return (
    <>
      <img
        src={require('../../assets/images/Preview.svg').default}
        alt='Weather App Icon'
        className={styles.Preview}
      />
    </>
  )
}

export default Preview
