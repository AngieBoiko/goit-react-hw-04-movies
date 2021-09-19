import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav_container}>
      <ul className={styles.navigation}>
        <li className={styles.list_item}>
          <NavLink to="/" exact activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink to="/movies" activeClassName={styles.active}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
