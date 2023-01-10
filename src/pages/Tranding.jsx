import { useState, useEffect } from 'react';

import { Section } from 'components/Section/Section';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { fetchTrending } from 'utils/fetchAPI';

const Tranding = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchTrending().then(response => setFilms(response.data.results));
  }, []);

  return (
    films && (
      <Section title="Popular Today">
        <FilmsList films={films} />
      </Section>
    )
  );
};

export default Tranding;
