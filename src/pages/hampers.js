import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import styles from "../components/layout.module.scss"
import Img from "gatsby-image"

const HampersPage = () => {

  const data = useStaticQuery(graphql`
    query {
      neat: file(relativePath: { eq: "images/hampers/wineonline.jpg" }) {
        ...hamperImage
      }

      ginandtonic: file(relativePath: { eq: "images/hampers/wineonline.jpg" }) {
        ...hamperImage
      }

      ginbuck: file(relativePath: { eq: "images/hampers/wineonline.jpg" }) {
        ...hamperImage
      }

      martini: file(relativePath: { eq: "images/hampers/wineonline.jpg" }) {
        ...hamperImage
      }

      hankypanky: file(relativePath: { eq: "images/hampers/wineonline.jpg" }) {
        ...hamperImage
      }

      hotpunch: file(relativePath: { eq: "images/hampers/wineonline.jpg" }) {
        ...hamperImage
      }
    }
  `)

  return (
    <Layout>
      <Head title="Serves" description="How to serve Chinnery Gin in various cocktails."/>
      <article className={styles.article}>
        <p className={styles.subtitle}>Christmas Gifts</p>
        <h1>Hampers</h1>
        <p>A bottle of Chinnery Gin is a welcome gift any time of year, but nothing says Christmas like a hamper. Each of these fine establishments offers a Chinnery gin hamper with a selection of accompaniments.</p>

        <h2><a href="https://wineonline.ie/collections/chinnery-spirits/products/the-chinnery-gin-hamper">Wine Online</a></h2>

        <p>Each hamper contains a 70cl bottle of Chinnery Dublin Dry Gin, two bottles of premium Poacher’s “Wild” Tonic, new Lismore Dark Chocolate Apple Sticks and a luxury candle from Irish brand Purcell &amp; Woodcock.</p>
        <p></p>
        <a href="https://wineonline.ie/collections/chinnery-spirits/products/the-chinnery-gin-hamper">
          <figure style={{textAlign: "center"}}>
            <Img fixed={data.ginandtonic.childImageSharp.fixed} />
          </figure>
        </a>

        <h2><a href="https://wineonline.ie/collections/chinnery-spirits/products/the-chinnery-gin-hamper">Wine Online</a></h2>

        <p>Each hamper contains a 70cl bottle of Chinnery Dublin Dry Gin, two bottles of premium Poacher’s “Wild” Tonic, new Lismore Dark Chocolate Apple Sticks and a luxury candle from Irish brand Purcell &amp; Woodcock.</p>
        <p></p>
        <a href="https://wineonline.ie/collections/chinnery-spirits/products/the-chinnery-gin-hamper">
          <figure style={{textAlign: "center"}}>
            <Img fixed={data.ginandtonic.childImageSharp.fixed} />
          </figure>
        </a>

      </article>
    </Layout>
  )
}

export default HampersPage

export const hamperImage = graphql`
  fragment hamperImage on File {
    childImageSharp {
      fixed(width: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
