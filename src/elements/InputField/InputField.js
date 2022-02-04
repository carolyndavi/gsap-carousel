import styles from './InputField.module.css'

const InputField = (props) => {
  return (
    <div className={styles.InputFieldWrapper}>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default InputField
