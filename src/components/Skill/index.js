import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Box from '../Box';
import SkillProgressBar from '../SkillProgressBar';
import './style.scss';
import Loading from '../Loading';

const Skill = (props) => {
  const { user, loading, className } = props;
  const { skillsInfo } = user || {};

  return (
    <Box className={classnames('skill', className)}>
      <Box.Title>Skills</Box.Title>

      {loading ? (
        <Loading />
      ) : (
        <Fragment>
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
        </Fragment>
      )}
    </Box>
  );
};

Skill.propTypes = {
  className: PropTypes.string,
};

Skill.defaultProps = {
  className: '',
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    loading: state.userReducer.loading,
  };
};

export default connect(mapStateToProps, null)(Skill);
