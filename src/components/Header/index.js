import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Overdrive from 'react-overdrive'

import profile from '../../static/profile.jpg';
import './Header.module.scss';

const propTypes = {};

const defaultProps = {};

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isHome } = this.props;
    return (
      <div styleName="header">
        <nav styleName="nav">
          {!isHome && (
            <Link to="/">
              <Overdrive id="profile">
                <div>
                  <img src={profile} alt=""/>
                </div>
              </Overdrive>
            </Link>
          )}
          <Link to="/404">404</Link>
        </nav>
        <div styleName="info">
          234
        </div>
      </div>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
