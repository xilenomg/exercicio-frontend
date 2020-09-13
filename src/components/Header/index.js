import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PageContainer from '../Container/Page';
import ProfileImage from '../Image/Profile';
import UserDetails from '../UserDetails';
import { socialNetworkArrayToJSON } from '../../utils/socialNetwork';
import ContactButton from '../ContactButton';

import { connect } from 'react-redux';
import './style.scss';
import Loading from '../Loading';

const Header = (props) => {
  const { user, loading } = props;
  const socialNetworks = user
    ? socialNetworkArrayToJSON(user.socialNetworks)
    : null;

  return (
    <div className="header">
      <PageContainer className="header__content">
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
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

            {user && user.contactInfo.email && (
              <div className="header__profile-contact">
                <ContactButton email={user.contactInfo.email} />
              </div>
            )}
          </Fragment>
        )}
      </PageContainer>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    loading: state.userReducer.loading,
  };
};

export default connect(mapStateToProps, null)(Header);
