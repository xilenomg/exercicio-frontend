import React from 'react';
import PropTypes from 'prop-types';
import PageContainer from '../Container/Page';
import ProfileImage from '../Image/Profile';
import UserDetails from '../UserDetails';
import { socialNetworkArrayToJSON } from '../../utils/socialNetwork';
import ContactButton from '../ContactButton';
import './style.scss';

const Header = (props) => {
  const { user } = props;

  const socialNetworks = socialNetworkArrayToJSON(user.socialNetworks);

  return (
    <div className="header">
      <PageContainer className="header__content">
        <div className="header__profile-image">
          <ProfileImage src={user.avatar} />
        </div>

        <div className="header__profile-details">
          <UserDetails
            name={user.name}
            role={user.role}
            socialNetworks={socialNetworks}
          />
        </div>

        {user && user.email && (
          <div className="header__profile-contact">
            <ContactButton email={user.email} />
          </div>
        )}
      </PageContainer>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
};

Header.defaultProps = {};

export default Header;
