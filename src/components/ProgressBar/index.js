import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

const ProgressBar = (props) => {
  const { className, percentage } = props;
  return (
    <div className={classnames('progress-bar', className)}>
      <div
        className="progress-bar__trail"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

ProgressBar.defaultProps = {
  percentage: 0,
};

ProgressBar.propTypes = {
  percentage: PropTypes.number,
};

export default ProgressBar;
