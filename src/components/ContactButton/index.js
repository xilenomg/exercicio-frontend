import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

const ContactButton = (props) => {
  const { email, className } = props;
  return (
    <a
      href={`mailto:${email}`}
      className={classnames('contact-button', className)}
    >
      <img src="/icons/contact-me.png" />
      Contact Me
    </a>
  );
};

ContactButton.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string.isRequired,
};

ContactButton.defaultProps = {
  className: '',
};

export default ContactButton;
