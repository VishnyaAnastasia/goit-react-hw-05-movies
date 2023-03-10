import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilmsList } from 'components/FilmsList/FilmsList';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { Section } from 'components/Section/Section';
import { fetchSearch } from 'utils/fetchAPI';

Notify.init({
  useIcon: false,
  fontSize: '20px',
  position: 'right-top',
  width: '350px',
  height: '35px',
  clickToClose: true,
});

const Search = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search');

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchSearch(query).then(response => {
      if (response.data.results.length === 0) {
        Notify.warning('Oppps.. bad query');
        return;
      }
      setFilms(response.data.results);
    });
  }, [query]);

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
    films && (
      <Section>
        <SearchForm handlerSubmit={handlerSubmit} />
        <FilmsList films={films} />
      </Section>
    )
  );
};

export default Search;
