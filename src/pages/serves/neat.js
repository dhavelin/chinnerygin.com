import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import styles from "../../components/layout.module.scss"

export default ({data}) => (
  <Layout>
    <Helmet>
      <title>Chinnery serve: Neat | Chinnery Gin</title>
      <meta name="Description" content="How to serve a neat Chinnery Gin" />
    </Helmet>
    <article className={styles.article}>
      <p className={styles.subtitle}>Serves</p>
      <h1>Chinnery Gin, Neat</h1>
      <p>Neat? Nobody drinks gin neat! Turns out, some do. In fact, we intentionally made this gin to be enjoyable on its own, as well as in the usual classic cocktails. It's a beautifully balanced and nuanced spirit with a very pleasing finish and no spirity harshness.</p>
      <p>Tasting neat is also a great way to separate good gin from bad. If you find an off flavour or just something you don't like, it's not going to be improved by adding tonic, just disguised. So make sure you like the gin on its own first, and go from there.</p>
      <figure>
        <Img fluid={data.ginneat.childImageSharp.fluid} />
        <figcaption>Chinnery Gin, Neat</figcaption>
      </figure>
      <h2>Ingredients</h2>
      <ul className={styles.ingredients}>
        <li>50ml Chinnery Gin</li>
        <li>That's it!</li>
      </ul>
      <h2>Preparation</h2>
      <p>Pour into a liqueur glass (or perhaps a glass you would enjoy a neat whiskey out of).</p>
      <h2>Notes and variations</h2>
      <ul>
        <li>You could serve it chilled from the fridge (or freezer). Or over ice. Or cool it cocktail-style while adding some dilution by stirring over ice then straining into a chilled glass.</li>
        <li>Add a garnish&#8212;a slice of lime, say&#8212;if desired.</li>
      </ul>
    </article>
  </Layout>
)

export const query = graphql`
  query {
    ginneat: file(relativePath: { eq: "serves/ChinneryGinNeat.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`