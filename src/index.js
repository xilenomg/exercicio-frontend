import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './style.scss';

const user = {
  name: 'James Lee',
  role: 'Web App Developer',
  avatar: '/img/profile.png',
  email: 'jameslee@gmail.com',
  socialNetworks: [
    { name: 'twitter', account: 'jameslee' },
    { name: 'google-plus', account: 'jameslee' },
    { name: 'linkedin', account: 'jameslee' },
    { name: 'github', account: 'jameslee' },
    { name: 'yahoo', account: 'jameslee' },
  ],
};

const App = () => {
  return (
    <Fragment>
      <Header user={user} />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('app-frontend'));
