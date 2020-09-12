import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';
import BoxTitle from './BoxTitle';

const Box = (props) => {
  const { children, className } = props;
  return <div className={classnames('box', className)}>{children}</div>;
};

Box.Title = BoxTitle;

Box.propTypes = {
  className: PropTypes.string,
};

Box.defaultProps = {
  className: '',
};

export default Box;
