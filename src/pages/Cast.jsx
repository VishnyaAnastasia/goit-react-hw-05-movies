import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'utils/fetchAPI';
import { Actors } from 'components/Actors/Actors';
import { Section } from 'components/Section/Section';

const Cast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(id).then(response => setCast(response.data.cast));
  }, [id]);

  return cast.length !== 0 ? (
    <Actors cast={cast} />
  ) : (
    <Section title="No cast" />
  );
};
export default Cast;
