import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

const PageContainer = (props) => {
  const { children, className } = props;
  return (
    <div className={classnames('page-container', className)}>{children}</div>
  );
};

PageContainer.propTypes = {
  className: PropTypes.string,
};

PageContainer.defaultProps = {
  className: '',
};

export default PageContainer;
