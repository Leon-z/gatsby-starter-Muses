import React from 'react';
import Link from 'gatsby-link';
import Overdrive from 'react-overdrive';

import Header from '../components/Header';
import Profile from '../components/Profile';

import './style/index.module.scss';

class IndexPage extends React.Component {
  componentWillUnmount() {
    setTimeout(() => {
      console.log(22222); 
    },3000)
  }

  render() {
    return (
      <div styleName="index-page">
        <Header isHome/>
        <Overdrive id="profile">
          <Profile/>
        </Overdrive>
      </div>
    )
  }
}

export default IndexPage
