import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title, description, noindex = false }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet>
      <html lang="en" />
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <meta name="Description" content={`${description}`} />
      { noindex && <meta name="robots" content="noindex" />}
    </Helmet>
  )
}

export default Head