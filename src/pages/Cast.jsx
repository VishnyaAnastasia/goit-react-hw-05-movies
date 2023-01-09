import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'utils/fetchAPI';
import { Actors } from 'components/Actors/Actors';

const Cast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCast(id).then(response => setCast(response.data.cast));
  }, [id]);

  return <Actors cast={cast} />;
};
export default Cast;
