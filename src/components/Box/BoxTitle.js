import React from 'react';
import './style.scss';

const BoxTitle = (props) => {
  const { children } = props;
  return <h2 className="box__title">{children}</h2>;
};

export default BoxTitle;
