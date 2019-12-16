import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import styles from "../components/layout.module.scss"
import Img from "gatsby-image"

const HampersPage = () => {

  const data = useStaticQuery(graphql`
    query {
      wineonline: file(relativePath: { eq: "images/hampers/wineonline.jpg" }) {
        ...hamperImage
      }

      headline: file(relativePath: { eq: "images/hampers/57hamper.jpg" }) {
        ...hamperImage
      }

      baggotstreet: file(relativePath: { eq: "images/hampers/baggotstreet.jpg" }) {
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
        <a href="https://wineonline.ie/collections/chinnery-spirits/products/the-chinnery-gin-hamper">
          <figure style={{textAlign: "center"}}>
            <Img fixed={data.wineonline.childImageSharp.fixed} />
          </figure>
        </a>

        <h2><a href="https://57theheadline.com/product/gin-hampers/">57 The Headline</a></h2>

        <p>Each hamper contains one bottle of Chinnery Gin, 2 Chinnery Gin glasses, 4 bottles of premium tonic and 3 types of garnish. All packed into a cardboard, wrapped hamper.</p>
        <a href="https://57theheadline.com/product/gin-hampers/">
          <figure style={{textAlign: "center"}}>
            <Img fixed={data.headline.childImageSharp.fixed} />
          </figure>
        </a>


        <h2><a href="http://baggotstreetwines.com/">Baggot Street Wines</a></h2>

        <p>Each hamper contains one bottle of Chinnery Gin, 3 bottles of Poachers Wild tonic and a Gin Fusion Kit.</p>
        <a href="https://57theheadline.com/product/gin-hampers/">
          <figure style={{textAlign: "center"}}>
            <Img fixed={data.baggotstreet.childImageSharp.fixed} />
          </figure>
        </a>

        <h2>Also...</h2>
        <p>These fine off licences can make up a Chinnery Gin hamper for you on request: <a href="https://www.blackrockcellar.com/">Blackrock Cellar</a>, <a href="https://mitchellandson.com/">Mitchell &amp; Son</a>, <a href="https://mchughs.ie/">McHugh's</a> and <a href="https://jamesfox.ie/">James Fox</a>.</p>

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
