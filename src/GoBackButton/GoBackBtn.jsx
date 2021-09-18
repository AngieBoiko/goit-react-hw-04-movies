import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function GoBackBtn() {
  const history = useHistory();
  const location = useLocation();
  const onClickFunc = e => {
    history.push(location?.state?.from?.location ?? '/');
  };
  return (
    <button type="button" onClick={onClickFunc}>
      {location?.state?.from?.label ?? 'Go back'}
    </button>
  );
}
