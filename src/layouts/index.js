import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import PageCard from '../components/PageCard';
import 'amfe-flexible';

import './resize.css';
import style from './layouts.module.css';




class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, data, ...props } = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div className={style.container}>
          <PageCard bgsrc="http://img4.imgtn.bdimg.com/it/u=3026294147,423550763&fm=200&gp=0.jpg">
          {children()}
          </PageCard>
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
