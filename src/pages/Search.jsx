import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FilmsList } from 'components/FilmsList/FilmsList';

import { Section } from 'components/Section/Section';
import { fetchSearch } from 'utils/fetchAPI';

const Search = () => {
  const [films, setFilms] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search');
  const navigate = useNavigate();

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchSearch(query).then(response => {
      if (response.data.results.length === 0) {
        navigate('/search');
        return;
      }
      setFilms(response.data.results);
    });
  }, [query, navigate]);

  const handlerSubmit = event => {
    event.preventDefault();
    const form = event.target;
    if (form.elements.query.value.trim() === '') {
      return;
    }
    setSearchParams({ search: form.elements.query.value });
    form.reset();
  };

  return (
    <Section title="Search">
      <form onSubmit={handlerSubmit}>
        <input type="text" name="query" />
        <button>Search</button>
      </form>
      <FilmsList films={films} />
    </Section>
  );
};

export default Search;
