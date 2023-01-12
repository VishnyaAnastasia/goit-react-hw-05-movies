import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Film.module.css';

export const Film = ({ film }) => {
  const location = useLocation();

  return (
    <>
      <div className={styles.btnSection}>
        <Link className={styles.btnBack} to={location.state?.from ?? '/'}>
          Back
        </Link>

        <section className={styles.filmCard}>
          <img
            className={styles.filmCover}
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${film.poster_path}`
                : 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/t9S352o0lbpXoaSC2X2T8bghGDa.jpg'
            }
            alt={film.title}
          />
          <div className={styles.Info}>
            <div className={styles.filmInfo}>
              <h3 className={styles.filmTitle}>{film.title}</h3>
              <p className={styles.filmOverview}>{film.overview}</p>
            </div>
            <div className={styles.filmInfoMore}>
              <Link
                className={styles.filmLinkMore}
                state={{ from: location.state ? location.state.from : '/' }}
                to={`/search/${film.id}/cast`}
              >
                Cast
              </Link>
              <Link
                className={styles.filmLinkMore}
                state={{ from: location.state ? location.state.from : '/' }}
                to={`/search/${film.id}/reviews`}
              >
                Reviews
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Film.propTypes = {
  film: PropTypes.object.isRequired,
};
