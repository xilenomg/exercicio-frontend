import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from '../Box';
import './style.scss';

const ContactInfo = (props) => {
  const { user, className } = props;
  const { contactInfo } = user;
  return (
    <Box className={classnames('contact-info', className)}>
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
    </Box>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,
};

ContactInfo.defaultProps = {
  className: '',
};

export default ContactInfo;
