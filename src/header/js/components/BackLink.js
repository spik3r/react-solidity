import React from 'react';
import '../../css/back-button.scss';

const BackLink = () => {
  const clickBack = () => {
    window.history.back();
  };
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" onClick={clickBack}>
      <span className="checkout-icon-back" />
Zurück
    </a>
  );
};

export default BackLink;
