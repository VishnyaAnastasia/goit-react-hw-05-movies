import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './FilmsList.module.css';

export const FilmsList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className={styles.filmsList}>
      {films.map(film => (
        <li className={styles.films} key={film.id}>
          <Link
            to={`/search/${film.id}`}
            state={{
              from: location.search
                ? location.pathname + location.search
                : location.pathname,
            }}
          >
            <img
              className={styles.filmCover}
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${film.poster_path}`
                  : 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/t9S352o0lbpXoaSC2X2T8bghGDa.jpg'
              }
              alt={film.title}
            />
            <div className={styles.filmCard}>
              <h3 className={styles.filmTitle}>
                {film.title.length < 28
                  ? film.title
                  : film.title.substring(0, 28) + '...'}
              </h3>
              <p className={styles.filmRating}>
                {film.vote_average.toFixed(1)}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};
