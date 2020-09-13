import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from '../Box';
import SkillProgressBar from '../SkillProgressBar';
import './style.scss';

const Skill = (props) => {
  const { user, className } = props;
  const { skillsInfo } = user;

  return (
    <Box className={classnames('skill', className)}>
      <Box.Title>Skills</Box.Title>
      {skillsInfo.description && <p>{skillsInfo.description}</p>}
      {skillsInfo.skills.map((skill) => {
        return (
          <SkillProgressBar
            key={skill.name}
            name={skill.name}
            levelKey={skill.level}
          />
        );
      })}
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
