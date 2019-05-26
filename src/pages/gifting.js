import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styles from "../components/layout.module.scss"

const GiftingPage = ({data}) => {
  return (
    <Layout>
      <Helmet>
        <title>Corporate Gifts | Chinnery Gin</title>
        <meta name="Description" content="The gift of a bottle of Chinnery Gin to valued colleagues and clients this Christmas." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <article>
        <p className={styles.subtitle}>Corporate Gifts</p>
        <h1>Chinnery Gin</h1>
        <p>George Chinnery’s dream, 200 years ago, was to set out from Dublin as far as the great ships of trade would take him, to find new subjects for his artist’s brush. He eventually found inspiration in the port city of Canton, China, and secured his place in history as the most important artist of the Old China Trade.</p>
        <p>The gift of a bottle of Chinnery Gin speaks of audacious dreams and great opportunities to be seized.</p>
        <figure className={styles.center}>
          <Img fixed={data.bottle.childImageSharp.fixed} />
        </figure>
        <p>Look through the windows of the Georgian Dublin townhouse on the front label of Chinnery Gin and see The Orient as George might have imagined it. Open the bottle and catch the wonderfully fragrant aroma of osmanthus flowers—the scent of Canton itself. Taste the gin and you will experience the flavours of the Old China Trade, from spicy cassia bark to a very special single variety of oolong tea.</p>
        <p>The end of the year is a moment to savour the hard won successes of the past 12 months, but also to relish the even greater ventures a fresh allocation of 365 days will allow. Inspire your colleagues and collaborators to dream big, with a bottle of Chinnery Dublin Dry Gin.</p>
        <figure className={styles.center}>
          <Img fixed={data.box.childImageSharp.fixed} />
        </figure>
        <p>An outer box is available from the first week in December.</p>
        <p>To order, contact Marie Byrne:<br />Email: marie@chinneryspirits.com<br />Tel: 087 900 5085<br />Minimum order 18 bottles (3 cases). Volume discounts available.</p>
      </article>
    </Layout>
  )
}

export default GiftingPage

export const query = graphql`
  query {
    bottle: file(relativePath: { eq: "bottle.png" }) {
      ...productImage
    }
    box: file(relativePath: { eq: "box.png" }) {
      ...productImage
    }
  }
`

export const productImage = graphql`
  fragment productImage on File {
    childImageSharp {
      fixed(width: 300) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
`