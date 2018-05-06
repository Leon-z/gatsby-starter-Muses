import React, { Component } from 'react';
import PropTypes from 'prop-types';

import profileImg from '../../static/profile.jpg';

import './Profile.module.scss';

const propTypes = {};

const defaultProps = {};

class Profile extends Component {
  render() {
    return (
      <div styleName="profile">
        <div styleName=""/>
        <div styleName="">Lzzzz</div>
        <div styleName="">Engineer / Web developer</div>
      </div>
    );
  }
}

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
