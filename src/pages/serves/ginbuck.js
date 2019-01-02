import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import styles from "../../components/layout.module.scss"

export default ({data}) => (
  <Layout>
    <Helmet>
      <title>Chinnery serve: Gin Buck | Chinnery Gin</title>
      <meta name="Description" content="How to mix a Chinnery Gin Buck" />
    </Helmet>
    <article className={styles.article}>
      <p className={styles.subtitle}>Serves</p>
      <h1>Chinnery Gin Buck</h1>
      <p>Turns out tonic is not the only mixer that works with gin. A buck is a mixed drink involving ginger ale or ginger beer and some kind of citrus juice.</p>
      <p>This is our version.</p>
      <figure>
        <Img fluid={data.ginbuck.childImageSharp.fluid} />
        <figcaption>Chinnery Gin Buck</figcaption>
      </figure>
      <h2>Ingredients</h2>
      <ul className={styles.ingredients}>
        <li>35ml Chinnery Gin</li>
        <li>100ml ginger ale</li>
        <li>Juice of half a lime</li>
        <li>Lime wheel, to garnish</li>
        <li>Ice</li>
      </ul>
      <h2>Preparation</h2>
      <p>Pour one measure of Chinnery Gin (35ml) into a highball glass. Add the juice of half a lime. Fill the glass with ice and top off with ginger ale. Garnish with a wedge of lime or a lime wheel.</p>
      <h2>Notes and variations</h2>
      <ul>
        <li>There are many ginger ales out there, some with a real kick of ginger, some with the merest nudge. </li>
        <li>For a garnish you could also try a slice of pink grapefruit, orange or lime with, in season, a sprig of fresh tarragon. Whatever tastes good to you.</li>
        <li>In our opinion, a highball glass makes for a better G&amp;T than a gin balloon because it fits just enough tonic without drowning the gin.</li>
      </ul>
    </article>
  </Layout>
)

export const query = graphql`
  query {
    ginbuck: file(relativePath: { eq: "serves/ChinneryGinBuck.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`