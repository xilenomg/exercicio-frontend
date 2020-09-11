import React from 'react';
import ProfileImage from '../Image/Profile';
import './style.scss';

const Header = () => {
  return (
    <div className="header">
      <ProfileImage src="/img/profile.png" className="header__profile-image" />
    </div>
  );
};

export default Header;
