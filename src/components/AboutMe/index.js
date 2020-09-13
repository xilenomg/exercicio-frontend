import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from '../Box';

const AboutMe = (props) => {
  const { user, className } = props;
  return (
    <Box className={classnames('about-me', className)}>
      <Box.Title>About Me</Box.Title>

      {user.aboutMe &&
        user.aboutMe.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
    </Box>
  );
};

AboutMe.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,
};

AboutMe.defaultProps = {
  className: '',
};

export default AboutMe;
