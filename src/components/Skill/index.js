import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from '../Box';

const Skill = (props) => {
  const { user, className } = props;
  return (
    <Box className={classnames('skill', className)}>
      <Box.Title>Skills</Box.Title>
    </Box>
  );
};

Skill.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,
};

Skill.defaultProps = {
  className: '',
};

export default Skill;
