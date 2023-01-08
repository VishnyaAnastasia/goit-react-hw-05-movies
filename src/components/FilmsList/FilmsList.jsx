import { Link, useLocation } from 'react-router-dom';

export const FilmsList = ({ films }) => {
  const location = useLocation();

  return (
    films && (
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link
              to={`/search/${film.id}`}
              state={{
                from: location.search
                  ? location.pathname + location.search
                  : location.pathname,
              }}
            >
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
};
