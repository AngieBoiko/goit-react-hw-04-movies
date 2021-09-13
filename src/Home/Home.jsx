import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export default function Home() {
  return (
    <ul className={styles.navigation}>
      <li className={styles.listItem}>
        <NavLink to="/" activeClassName={styles.active}>
          Home
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink to="/movies" activeClassName={styles.active}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
}
