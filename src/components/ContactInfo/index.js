import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Box from '../Box';
import './style.scss';
import Loading from '../Loading';

const ContactInfo = (props) => {
  const { user, loading, className } = props;
  const { contactInfo } = user || {};
  return (
    <Box className={classnames('contact-info', className)}>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          {contactInfo && contactInfo.city && (
            <div className="contact-info__detail">
              <img src="/icons/location.png" />
              {contactInfo.city}
            </div>
          )}

          {contactInfo && contactInfo.email && (
            <div className="contact-info__detail">
              <a href={contactInfo.email}>
                <img src="/icons/email.png" />
                {contactInfo.email}
              </a>
            </div>
          )}

          {contactInfo && contactInfo.website && (
            <div className="contact-info__detail">
              <a href={contactInfo.website}>
                <img src="/icons/website.png" />
                {contactInfo.website}
              </a>
            </div>
          )}
        </Fragment>
      )}
    </Box>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,
};

ContactInfo.defaultProps = {
  className: '',
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    loading: state.userReducer.loading,
  };
};

export default connect(mapStateToProps, null)(ContactInfo);
