import styles from './Actors.module.css';
import PropTypes from 'prop-types';

export const Actors = ({ cast }) => {
  return (
    <ul className={styles.actorsList}>
      {cast.map(actor => (
        <li className={styles.actors} key={actor.id}>
          <img
            className={styles.actorPhoto}
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`
                : 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/t9S352o0lbpXoaSC2X2T8bghGDa.jpg'
            }
            alt={actor.name}
          />
          <div className={styles.actorCard}>
            <p className={styles.actorName}>{actor.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

Actors.propTypes = {
  cast: PropTypes.array.isRequired,
};
