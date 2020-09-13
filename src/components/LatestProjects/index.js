import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from '../Box';
import HighlightedProject from '../Projects/Highlighted/index';
import SingleProject from '../Projects/Single/index';
import './style.scss';

const LatestProjects = (props) => {
  const { projects, className } = props;
  return (
    <Box className={classnames('latest-projects', className)}>
      <Box.Title>Latest Projects</Box.Title>
      {projects &&
        Array.isArray(projects) &&
        projects.map((project, index) => {
          if (index === 0) {
            return (
              <Fragment>
                <HighlightedProject key={project.id} project={project} />
                {projects.length > 1 && <hr className="latest-projects__separator" />}
              </Fragment>
            );
          }
          return <SingleProject key={project.id} project={project} />;
        })}
    </Box>
  );
};

LatestProjects.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.array.isRequired,
};

LatestProjects.defaultProps = {
  className: '',
};

export default LatestProjects;
