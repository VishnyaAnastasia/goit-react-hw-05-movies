import { NavLink } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import styles from './Nav.module.css';

export const Nav = () => {
  return (
    <header>
      <Section>
        <div className={styles.backLine}>
          <nav>
            <ul className={styles.navList}>
              <li>
                <NavLink className={styles.navLink} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={styles.navLink} to="/search">
                  Films
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Section>
    </header>
  );
};
