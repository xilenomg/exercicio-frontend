import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Box from '../Box';
import Loading from '../Loading';

const AboutMe = (props) => {
  const { user, loading, className } = props;
  return (
    <Box className={classnames('about-me', className)}>
      <Box.Title>About Me</Box.Title>

      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          {user &&
            user.aboutMe &&
            user.aboutMe.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
        </Fragment>
      )}
    </Box>
  );
};

AboutMe.propTypes = {
  className: PropTypes.string,
};

AboutMe.defaultProps = {
  className: '',
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    loading: state.userReducer.loading,
  };
};

export default connect(mapStateToProps, null)(AboutMe);
