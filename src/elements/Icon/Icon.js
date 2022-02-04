import styles from './Icon.module.css'

const icon = (props) => {
  return (
    <img
      src={require(`../../assets/${props.description}.svg`)}
      alt={props.description}
      className={styles.Icon}
    />
  )
}

export default icon
