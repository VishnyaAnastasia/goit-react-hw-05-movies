import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Tranding</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
