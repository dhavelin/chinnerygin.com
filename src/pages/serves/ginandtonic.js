import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import styles from "../../components/layout.module.scss"

export default ({data}) => (
  <Layout>
    <Helmet>
      <title>Chinnery serve: Gin &amp; Tonic | Chinnery Gin</title>
      <meta name="Description" content="How to mix the perfect Chinnery Gin &amp; Tonic" />
    </Helmet>
    <article className={styles.article}>
      <p className={styles.subtitle}>Serves</p>
      <h1>Chinnery Gin &amp; Tonic</h1>
      <figure>
        <Img fluid={data.ginandtonic.childImageSharp.fluid} />
        <figcaption>Chinnery Gin &amp; Tonic</figcaption>
      </figure>
      <h2>Ingredients</h2>
      <ul className={styles.ingredients}>
        <li>35ml Chinnery Gin</li>
        <li>100ml tonic</li>
        <li>Twist of pink grapefruit</li>
        <li>Ice</li>
      </ul>
      <h2>Preparation</h2>
      <p>Pour one measure of Chinnery Gin (35ml) into a highball glass. Cut a strip of peel (about 7cm would do) from a pink grapefruit. Hold it, outer skin down, over the glass and squeeze to release the oils into the glass. Drop the peel into the gin. Fill the glass with ice. Top with tonic.</p>
      <h2>Notes and variations</h2>
      <ul>
        <li>We find Poacher's Wild Tonic a good complement to Chinnery Gin but Fever-Tree Refreshingly Light, Schweppes, or any other decent tonic will also do the trick. Feel free to substitute your own favourite.</li>
        <li>For a garnish you could also try a slice of pink grapefruit, orange or lime with, in season, a sprig of fresh tarragon. Whatever tastes good to you.</li>
        <li>In our opinion, a highball glass makes for a better G&amp;T than a gin balloon because it fits just enough tonic without drowning the gin.</li>
      </ul>
    </article>
  </Layout>
)

export const query = graphql`
  query {
    ginandtonic: file(relativePath: { eq: "serves/ChinneryGinAndTonic.jpg" }) {
      ...serveGinAndTonicImage
    }
    selfportrait: file(relativePath: { eq: "selfportrait.jpg" }) {
      ...serveGinAndTonicImage
    }
  }
`

export const serveGinAndTonicImage = graphql`
  fragment serveGinAndTonicImage on File {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`