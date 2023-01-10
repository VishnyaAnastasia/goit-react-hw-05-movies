import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

export const Feedback = ({ reviews }) => {
  return (
    <ul className={styles.feedbackList}>
      {reviews.map(review => (
        <li className={styles.feedbacCard} key={review.id}>
          <p className={styles.feedbackAuthor}>{review.author}</p>
          <p className={styles.feedbackContent}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

Feedback.propTypes = {
  reviews: PropTypes.array.isRequired,
};
