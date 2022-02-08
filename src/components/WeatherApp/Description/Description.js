import styles from './Description.module.css'

const Description = (props) => {
  return (
    <>
      <div className={styles.DescriptionWrapper}>
        <h2>
          {props.city}, {props.country}
        </h2>
        <span>{props.description}</span>
      </div>
    </>
  )
}

export default Description
