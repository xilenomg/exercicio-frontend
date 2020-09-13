import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ProjectImage from '../../Image/Project';
import BackMyProjectButton from '../../BackMyProjectButton';
import './style.scss';

const HighlightedProject = (props) => {
  const { className, project } = props;
  return (
    <div className={classnames('highlighted-project', className)}>
      {project.title && (
        <h3 className="highlighted-project__title">{project.title}</h3>
      )}

      {project.subtitle && (
        <h4 className="highlighted-project__subtitle">{project.subtitle}</h4>
      )}

      {project.picture && (
        <ProjectImage
          src={`/img/${project.picture}`}
          alt={project.title}
          title={project.title}
        />
      )}

      {project.description && (
        <div className="highlighted-project__description">
          {project.description}
        </div>
      )}

      <div className="highlighted-project__button-placeholder">
        <BackMyProjectButton />
      </div>
    </div>
  );
};

HighlightedProject.propsTypes = {
  project: PropTypes.object.isRequired,
  className: PropTypes.string,
};

HighlightedProject.defaultProps = {
  className: '',
};

export default HighlightedProject;
