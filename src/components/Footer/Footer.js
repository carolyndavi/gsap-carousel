import styles from './Footer.module.css'
import Logo from '../../elements/Logo/Logo'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Logo />
      <div className={styles.Separator}></div>
    </footer>
  )
}

export default Footer
