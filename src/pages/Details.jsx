import { useState, useEffect } from 'react';
import {
  Link,
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { fetchDetails } from 'utils/fetchAPI';

import { Section } from 'components/Section/Section';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetchDetails(id).then(response => {
      if (!response) {
        navigate('/search');
        return;
      }
      setFilm(response.data);
    });
  }, [id, navigate]);

  const location = useLocation();

  return (
    <Section>
      {film && (
        <>
          <p>{film.title}</p>
          <Link
            state={{ from: location.state ? location.state.from : '/' }}
            to={`/search/${film.id}/cast`}
          >
            Cast
          </Link>
          <Link
            state={{ from: location.state ? location.state.from : '/' }}
            to={`/search/${film.id}/reviews`}
          >
            Reviews
          </Link>
        </>
      )}
      <Outlet />
      <Link to={location.state ? location.state.from : '/'}>Back</Link>
    </Section>
  );
};
export default Details;
