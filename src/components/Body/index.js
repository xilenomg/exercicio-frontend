import React from 'react';

import BodyLeft from './BodyLeft';
import BodyRight from './BodyRight';

import './style.scss';

const Body = (props) => {
  const { children } = props;
  return <div className="body">{children}</div>;
};

Body.Left = BodyLeft;
Body.Right = BodyRight;

export default Body;
