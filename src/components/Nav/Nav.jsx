import { NavLink } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import styles from './Nav.module.css';

export const Nav = () => {
  return (
    <header>
      <Section>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navLink}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={styles.navLink}>
              <NavLink to="/search">Films</NavLink>
            </li>
          </ul>
        </nav>
      </Section>
    </header>
  );
};
