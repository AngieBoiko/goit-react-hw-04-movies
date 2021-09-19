import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './styles.module.css';

export default function GoBackBtn() {
  const history = useHistory();
  const location = useLocation();
  const onClickFunc = e => {
    history.push(location?.state?.from?.location ?? '/');
  };
  return (
    <button type="button" onClick={onClickFunc} className={styles.btn}>
      {location?.state?.from?.label ?? 'Go back'}
    </button>
  );
}
