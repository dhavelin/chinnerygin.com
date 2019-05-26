import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styles from "../components/layout.module.scss"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <Helmet>
        <title>Chinnery Gin</title>
        <meta name="Description" content="Chinnery Gin captures the Old China Trade in a bottle. Catch the wonderfully fragrant aroma of osmanthus flowers—the scent of Canton itself. Taste the gin and experience the flavours of the Old China Trade, from spicy cassia bark to a very special single variety of oolong tea." />
      </Helmet>
      <div className={styles.frontmain}>
        <div className={styles.frontimage}>
          <Img fluid={data.bottle.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    bottle: file(relativePath: { eq: "bottle.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`