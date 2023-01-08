import { useState, useEffect } from 'react';

import { Section } from 'components/Section/Section';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { fetchTrending } from 'utils/fetchAPI';

const Tranding = () => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    fetchTrending().then(response => setFilms(response.data.results));
  }, []);

  return (
    <Section title="Tranding">
      <FilmsList films={films} />
    </Section>
  );
};

export default Tranding;
