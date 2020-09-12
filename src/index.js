import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
import AboutMe from './components/AboutMe';
import LatestProjects from './components/LatestProjects';
import ContactInfo from './components/ContactInfo';
import Skill from './components/Skill';
import PageContainer from './components/Container/Page';
import './style.scss';

const user = {
  name: 'James Lee',
  role: 'Web App Developer',
  avatar: '/img/profile.png',
  aboutMe: [
    'Write a brief intro about yourself',
    "It's a good idea to include personal interests and hobbies as well",
  ],
  skillsInfo: {
    description: 'Intro about your skills goes here',
    skills: [
      { name: 'Python & Django', level: 'expert' },
      { name: 'Javascript & jQuery', level: 'expert' },
      { name: 'HTML5 , CSS3, SASS & LESS', level: 'expert' },
      { name: 'Ruby on Rails', level: 'pro' },
    ],
  },
  contactInfo: {
    city: 'San Francisco, US',
    email: 'jameslee@website.com',
    website: 'http://www.website.com',
  },
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

      <PageContainer>
        <Body>
          <Body.Left>
            <AboutMe user={user} />
            <LatestProjects />
          </Body.Left>
          <Body.Right>
            <ContactInfo user={user} />
            <Skill user={user} />
          </Body.Right>
        </Body>
      </PageContainer>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('app-frontend'));
