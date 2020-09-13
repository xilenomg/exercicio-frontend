import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Body from '../components/Body';
import AboutMe from '../components/AboutMe';
import LatestProjects from '../components/LatestProjects';
import ContactInfo from '../components/ContactInfo';
import Skill from '../components/Skill';
import PageContainer from '../components/Container/Page';
import { fetchProjects } from '../redux/actions/projects';
import { fetchUser } from '../redux/actions/user';

const App = () => {
  return (
    <Fragment>
      <Header />
      <PageContainer>
        <Body>
          <Body.Left>
            <AboutMe />
            <LatestProjects />
          </Body.Left>
          <Body.Right>
            <ContactInfo />
            <Skill />
          </Body.Right>
        </Body>
      </PageContainer>
    </Fragment>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: dispatch(fetchProjects()),
  fetchUser: dispatch(fetchUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
