import styles from './SearchBar.module.css'
import Button from '../../elements/Button/Button'
import InputField from '../../elements/InputField/InputField'

const SearchBar = (props) => {
  return (
    <>
      <div className={styles.SearchBarWrapper}>
        <form className={styles.SearchBarForm} onSubmit={props.weatherMethod}>
          <InputField
            type='text'
            name='city'
            label='Location'
            placeholder='Enter a city'
            value={props.value}
            handleChange={props.onChangeHandler}
            error={props.error}
          />
          <Button
            name='searchSubmit'
            type='submit'
            position='onForm'
            clicked={props.onClickHandler}
          >
            Search
          </Button>
        </form>
      </div>
    </>
  )
}

export default SearchBar
