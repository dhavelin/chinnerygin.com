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
        <title>Chinnery serve: Hot Punch | Chinnery Gin</title>
        <meta name="Description" content="How to mix a Chinnery Hot Punch" />
      </Helmet>
      <article className={styles.article}>
        <p className={styles.subtitle}>Serves</p>
        <h1>Chinnery Gin Hot Punch</h1>
        <p>The idea of serving gin warm is an old one. In A Christmas Carol, Charles Dickens describes Bob Cratchit's family gathering around the hearth to enjoy a hot gin punch "while the chestnuts on the fire sputtered and cracked noisily". Somewhere along the way we lost this traditional serve but it can hardly be bettered as a welcoming drink for party guests on a cold, dark winter's night. As it gently simmers on the stove, the spices fill the kitchen with a wonderful Christmassy aroma putting everyone in a relaxed mood.</p>
        <figure>
          <Img fluid={data.hotpunch.childImageSharp.fluid} />
          <figcaption>Chinnery Gin Hot Punch</figcaption>
        </figure>
        <h2>Ingredients</h2>
        <ul className={styles.ingredients}>
          <li>1 litre Pressed apple juice</li>
          <li>500ml Chinnery Gin</li>
          <li>250ml Sweet (red) Vermouth</li>
          <li>75ml Balsamic Cider Vinegar</li>
          <li>The juice of 3 oranges</li>
          <li>Whole cinnamon sticks, star anise, cloves, to taste</li>
          <li>One vanilla pod (sliced lengthways)</li>
        </ul>
        <h2>Preparation</h2>
        <p>Combine all the ingredients in a pot and warm gently on the stove for 30 minutes. Don't allow it to boil. Serve in a tea cup with a cinnamon stick and a slice of orange. Makes about 10 cups.</p>
        <h2>Notes and variations</h2>
        <ul>
          <li>The balsamic cider vinegar (Llewellyn's Irish Balsamic Cider Vinegar is particularly recommended) is optional but adds richness of flavour while knocking back the sweetness of the apple juice.</li>
          <li>You could try a sour citrus juice, like lime or lemon, with honey or maple syrup to sweeten.</li>
          <li>Vary the spice list to include, say, nutmeg, ginger or chilli flakes. You could also infuse the spices in the gin some days in advance.</li>
          <li>In general, feel free to modify the recipe. You should sample as you go though, adjusting the sharpness, sweetness, spiciness, etc. to your own taste.</li>
        </ul>
      </article>
    </Layout>
  )
}

export default ServePage

export const query = graphql`
  query {
    hotpunch: file(relativePath: { eq: "images/serves/ChinneryGinHotPunch.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`