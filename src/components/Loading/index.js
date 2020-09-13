import React from 'react';
import './style.scss';

const Loading = () => {
  return (
    <div className="loading">
      <span className="loading__text">Carregando...</span>
      <div className="loading__icone"></div>
    </div>
  );
};

export default Loading;
