import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

const BackMyProjectButton = (props) => {
  const { email, className } = props;
  return (
    <a href="#" className={classnames('back-my-project-button', className)}>
      <img src="/icons/back-my-project.png" />
      Back my project
    </a>
  );
};

BackMyProjectButton.propTypes = {
  className: PropTypes.string,
};

BackMyProjectButton.defaultProps = {
  className: '',
};

export default BackMyProjectButton;
