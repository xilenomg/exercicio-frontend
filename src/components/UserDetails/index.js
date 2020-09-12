import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SocialNetwork from '../SocialNetwork';
import './style.scss';

const UserDetails = (props) => {
  const { className, name, role, socialNetworks } = props;

  const socialNetworksKeys = Object.keys(socialNetworks);

  return (
    <div className={classnames('user-details', className)}>
      <h1 className="user-details__name">{name}</h1>
      <h2 className="user-details__role">{role}</h2>

      {socialNetworksKeys && socialNetworksKeys.length > 0 && (
        <div className="user-details__social-networks">
          {socialNetworksKeys.map((socialNetwork) => {
            return (
              <SocialNetwork
                type={socialNetwork}
                account={socialNetworks[socialNetwork]}
                className="user-details__social-networks__social-network-single"
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

UserDetails.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  socialNetworks: PropTypes.object,
};

UserDetails.defaultProps = {
  className: '',
  socialNetworks: {},
};

export default UserDetails;
