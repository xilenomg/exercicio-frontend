import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from '../Box';

const LatestProjects = (props) => {
  const { user, className } = props;
  return (
    <Box className={classnames('latest-projects', className)}>
      <Box.Title>Latest Projects</Box.Title>
    </Box>
  );
};

LatestProjects.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,
};

LatestProjects.defaultProps = {
  className: '',
};

export default LatestProjects;
