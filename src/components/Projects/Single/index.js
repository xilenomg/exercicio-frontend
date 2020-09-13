import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ProjectImage from '../../Image/Project';
import './style.scss';

const SingleProject = (props) => {
  const { className, project } = props;
  return (
    <div className={classnames('single-project', className)}>
      <div className="single-project__image-placeholder">
        {project.picture && (
          <ProjectImage
            src={`/img/${project.picture}`}
            alt={project.title}
            title={project.title}
          />
        )}
      </div>
      <div className="single-project__details">
        {project.title && (
          <h3 className="single-project__title">{project.title}</h3>
        )}

        {project.description && (
          <div className="single-project__description">
            {project.description}
          </div>
        )}

        <a className="single-project__find-out-more">
          <img src="/icons/external-link.png" />
          Find out More
        </a>
      </div>
    </div>
  );
};

SingleProject.propsTypes = {
  project: PropTypes.object.isRequired,
  className: PropTypes.string,
};

SingleProject.defaultProps = {
  className: '',
};

export default SingleProject;
