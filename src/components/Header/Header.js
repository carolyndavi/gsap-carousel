import styles from './Header.module.css'
import Logo from '../../elements/Logo/Logo'

const Header = () => {
  return (
    <header className={styles.Header}>
      <Logo />
    </header>
  )
}

export default Header
