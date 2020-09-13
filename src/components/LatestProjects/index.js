import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { fetchProjects } from '../../redux/actions/projects';
import Box from '../Box';
import HighlightedProject from '../Projects/Highlighted/index';
import Loading from '../Loading';
import SingleProject from '../Projects/Single/index';

import './style.scss';

const LatestProjects = (props) => {
  const { projects, className, loading } = props;
  return (
    <Box className={classnames('latest-projects', className)}>
      <Box.Title>Latest Projects</Box.Title>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          {projects &&
            Array.isArray(projects) &&
            projects.map((project, index) => {
              return (
                <Fragment key={project.id}>
                  {index === 0 ? (
                    <Fragment>
                      <HighlightedProject project={project} />
                      {projects.length > 1 && (
                        <hr className="latest-projects__separator" />
                      )}
                    </Fragment>
                  ) : (
                    <SingleProject key={project.id} project={project} />
                  )}
                </Fragment>
              );
            })}
        </Fragment>
      )}
    </Box>
  );
};

LatestProjects.propTypes = {
  className: PropTypes.string,
};

LatestProjects.defaultProps = {
  className: '',
};

const mapStateToProps = (state) => {
  return {
    projects: state.projectReducer.projects,
    loading: state.projectReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: dispatch(fetchProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestProjects);
