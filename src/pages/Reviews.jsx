import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utils/fetchAPI';

const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews(id).then(response => setReviews(response.data.results));
  }, [id]);

  return (
    reviews && (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Reviews;
