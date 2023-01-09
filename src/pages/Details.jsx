import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { fetchDetails } from 'utils/fetchAPI';
import { Film } from 'components/Film/Film';

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
      <Film film={film} />
      <Outlet />
    </Section>
  );
};
export default Details;
