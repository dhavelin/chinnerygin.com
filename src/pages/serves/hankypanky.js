import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import styles from "../../components/layout.module.scss"

const ServePage = ({data}) => {
  return (
    <Layout>
      <Helmet>
        <title>Chinnery serve: Hanky Panky | Chinnery Gin</title>
        <meta name="Description" content="How to mix a Chinnery Hanky Panky cocktail" />
      </Helmet>
      <article className={styles.article}>
        <p className={styles.subtitle}>Serves</p>
        <h1>Chinnery Gin Hanky Panky</h1>
        <p>One botanical we explored when developing Chinnery Gin was rhubarb root, something that was imported in great quantity into Europe from China in the 1800s. It was far too bitter for our gin, though, so we left it out.</p>
        <p>Rhubarb root is one of the main flavours of the Italian digestif, Fernet Branca, however. The classic Hanky Panky cocktail, made with Chinnery Gin and Fernet Branca, is therefore a real hymn to the Old China Trade.</p>
        <figure>
          <Img fluid={data.hankypanky.childImageSharp.fluid} />
          <figcaption>Chinnery Gin Hanky Panky</figcaption>
        </figure>
        <h2>Ingredients</h2>
        <ul className={styles.ingredients}>
          <li>50ml Chinnery Gin</li>
          <li>50ml Sweet (red) Vermouth</li>
          <li>5ml Fernet Branca</li>
          <li>Twist of orange, to garnish</li>
        </ul>
        <h2>Preparation</h2>
        <p>Add the gin, sweet vermouth and Fernet Branca to a mixing glass filled with ice. Stir well, then strain into a coupe glass. Squeeze the orange peel over the glass to release the oils, then add the peel to the drink.</p>
        <h2>Notes and variations</h2>
        <ul>
          <li>The choice of vermouth is important. We have found Cocchi Vermouth di Torino works especially well with Chinnery Gin. Next best is Bramley &amp; Gage Sweet Vermouth. Martini Rosso is a little thinner and doesn't stand up to the bitterness of the Fernet as well as the others so if using it you might find reducing the amount of Fernet slightly helps.</li>
        </ul>
      </article>
    </Layout>
  )
}

export default ServePage

export const query = graphql`
  query {
    hankypanky: file(relativePath: { eq: "serves/ChinneryGinHankyPanky.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`