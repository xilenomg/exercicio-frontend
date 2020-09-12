import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

const SocialNetwork = (props) => {
  const { className, type, account } = props;
  return (
    <div className={classnames('social-network', className)}>
      <img
        className="social-network__image"
        src={`/icons/${type}.png`}
        alt={`${type}: ${account}`}
        title={`${type}: ${account}`}
      />
    </div>
  );
};

SocialNetwork.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'twitter',
    'google-plus',
    'linkedin',
    'github',
    'yahoo',
  ]).isRequired,
  account: PropTypes.string.isRequired,
};

SocialNetwork.defaultProps = {
  className: '',
};

export default SocialNetwork;
