import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export const SearchForm = ({ handlerSubmit }) => {
  return (
    <form className={styles.searchForm} onSubmit={handlerSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
        placeholder="Enter the movie title"
      />
      <button className={styles.searchBtn}>Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  handlerSubmit: PropTypes.func.isRequired,
};
