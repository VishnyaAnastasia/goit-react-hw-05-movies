import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'utils/fetchAPI';
import { Feedback } from 'components/Feedback/Feedback';
import { Section } from 'components/Section/Section';

const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(id).then(response => setReviews(response.data.results));
  }, [id]);

  return reviews.length !== 0 ? (
    <Feedback reviews={reviews} />
  ) : (
    <Section title="No reviews" />
  );
};

export default Reviews;
