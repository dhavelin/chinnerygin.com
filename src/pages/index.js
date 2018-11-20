import React from "react";
import Img from "gatsby-image"
import Layout from "../components/layout";
import styles from "../components/layout.module.scss"

export default ({data}) => (
  <Layout>
    <div className={styles.frontmain}>
      <div className={styles.frontimage}>
        <Img fluid={data.bottle.childImageSharp.fluid} />
      </div>
    </div>
  </Layout>
)

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