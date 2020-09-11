import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './style.scss';

const App = () => {
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('app-frontend'));
