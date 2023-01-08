import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchCast } from 'utils/fetchAPI';

const Cast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCast(id).then(response => setCast(response.data.cast));
  }, [id]);

  return (
    cast && (
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    )
  );
};
export default Cast;
