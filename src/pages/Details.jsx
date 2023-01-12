import { useState, useEffect } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';

import { fetchDetails } from 'utils/fetchAPI';
import { Film } from 'components/Film/Film';

import { Section } from 'components/Section/Section';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [film, setFilm] = useState({});

  useEffect(() => {
    fetchDetails(id).then(response => {
      if (!response) {
        return;
      }
      setFilm(response.data);
    });
  }, [id]);

  return (
    film && (
      <Section>
        <Film film={film} />
        <Outlet />
      </Section>
    )
  );
};
export default Details;
