import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

const avatarURL = '/img/avatar.jpeg';

const ProfileImage = (props) => {
  // permitir tentar o avatar em caso de falha da imagem de props
  let errorFlag = true;

  const onError = (e) => {
    // caso aconteça um erro no em qualquer das imagens não entra em loop
    if (errorFlag) {
      errorFlag = false;
      e.target.src = avatarURL;
    }
  };

  const { src, className, ...rest } = props;
  return (
    <img
      src={src}
      onError={onError}
      className={classnames('profile-image', className)}
      {...rest}
    />
  );
};

ProfileImage.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

ProfileImage.defaultProps = {
  src: '',
  className: '',
};

export default ProfileImage;
