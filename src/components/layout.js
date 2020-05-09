import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import Header from './header'

const Layout = ({children}) => {
  const data = useStaticQuery(
    graphql`
      {
        site{
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <React.Fragment>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>  
      </Helmet>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout