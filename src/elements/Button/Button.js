import styles from './Button.module.css'

const Button = (props) => {
  return (
    <div className={styles.ButtonWrapper}>
      <button
        className={styles.Button}
        type={props.type}
        name={props.name}
        onClick={props.clicked}
      >
        {props.children}
      </button>
    </div>
  )
}

export default Button
