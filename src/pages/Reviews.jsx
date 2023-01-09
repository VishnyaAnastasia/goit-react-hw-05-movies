import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utils/fetchAPI';
import { Feedback } from 'components/Feedback/Feedback';

const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews(id).then(response => setReviews(response.data.results));
  }, [id]);

  return <Feedback reviews={reviews} />;
};

export default Reviews;
