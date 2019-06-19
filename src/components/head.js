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
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      { noindex && <meta name="robots" content="noindex" />}
    </Helmet>
  )
}

export default Head