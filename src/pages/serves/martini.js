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
        <title>Chinnery serve: Gin Martini | Chinnery Gin</title>
        <meta name="Description" content="How to serve a Chinnery Gin Martini" />
      </Helmet>
      <article className={styles.article}>
        <p className={styles.subtitle}>Serves</p>
        <h1>Chinnery Gin Martini</h1>
        <p>With just two ingredients, the Martini is simple to mix but endlessly argued over. Every civilised person should have their own signature Martini recipe so do experiment with vermouths and ratios until you have created a potion that soothes your very soul with each sip.</p>
        <figure>
          <Img fluid={data.martini.childImageSharp.fluid} />
          <figcaption>Chinnery Gin Martini</figcaption>
        </figure>
        <h2>Ingredients</h2>
        <ul className={styles.ingredients}>
          <li>50ml Chinnery Gin</li>
          <li>20ml Dry (white) Vermouth</li>
          <li>Lemon twist or olive, to garnish</li>
        </ul>
        <h2>Preparation</h2>
        <p>Fill a mixing glass with ice and pour in the gin and vermouth. Stir well. Strain into a chilled martini glass. Squeeze the twist of lemon over the glass to release the oils and drop it in. Or garnish with an olive, if you prefer.</p>
        <h2>Notes and variations</h2>
        <ul>
          <li>If doing this at home you can premix the cocktail and store it in the freezer until you want to drink it. The cold (and lack of dilution added by stirring over ice) makes a slightly stronger drink with a thicker mouthfeel.</li>
          <li>The choice of vermouth makes a huge difference. The most widely available and keenly priced is the Martini brand. With Chinnery Gin we prefer Martini Bianco to Martini Extra Dry but it's a matter of preference. We also like Bramley &amp; Gage's Dry Vermouth. It's quite flavourful so if using that we might reduce the quantity to 15ml to maintain the balance.</li>
          <li>A Martini is all about the balance between its two ingredients. Start with the gin and add your chosen vermouth in increments of 5ml until you find the point it tastes best to you.</li>
        </ul>
      </article>
    </Layout>
  )
}

export default ServePage

export const query = graphql`
  query {
    martini: file(relativePath: { eq: "images/serves/ChinneryGinMartini.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`