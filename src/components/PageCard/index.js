import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PageCard.module.scss';
const propTypes = {};

const defaultProps = {};

class PageCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bgsrc, children } = this.props;
    return (
      <div styleName="page-card" style={{backgroundImage:`url(${bgsrc})`}}>
        <div styleName="bg"></div>
        <div styleName="circle"></div>
        <div styleName="main">
          {children}
        </div>
      </div>
    );
  }
}

PageCard.propTypes = propTypes;
PageCard.defaultProps = defaultProps;

export default PageCard;
