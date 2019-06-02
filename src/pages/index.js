import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Head from "../components/head"
import styles from "../components/layout.module.scss"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <Head title="Home" description="Chinnery Gin captures the Old China Trade in a bottle. Catch the wonderfully fragrant aroma of osmanthus flowers—the scent of Canton itself. Taste the gin and experience the flavours of the Old China Trade, from spicy cassia bark to a very special single variety of oolong tea."/>
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
    bottle: file(relativePath: { eq: "images/bottle.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`