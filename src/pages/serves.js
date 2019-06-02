import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import styles from "../components/layout.module.scss"
import Img from "gatsby-image"

const ServesPage = () => {

  const data = useStaticQuery(graphql`
    query {
      neat: file(relativePath: { eq: "images/serves/ChinneryGinNeat.jpg" }) {
        ...botanicalImage
      }

      ginandtonic: file(relativePath: { eq: "images/serves/ChinneryGinAndTonic.jpg" }) {
        ...botanicalImage
      }

      ginbuck: file(relativePath: { eq: "images/serves/ChinneryGinBuck.jpg" }) {
        ...botanicalImage
      }

      martini: file(relativePath: { eq: "images/serves/ChinneryGinMartini.jpg" }) {
        ...botanicalImage
      }

      hankypanky: file(relativePath: { eq: "images/serves/ChinneryGinHankyPanky.jpg" }) {
        ...botanicalImage
      }

      hotpunch: file(relativePath: { eq: "images/serves/ChinneryGinHotPunch.jpg" }) {
        ...botanicalImage
      }
    }
  `)

  return (
    <Layout>
      <Head title="Serves" description="How to serve Chinnery Gin in various cocktails."/>
      <article>
        <p className={styles.subtitle}>The Gin</p>
        <h1>Suggested Serves</h1>
        <p>Chinnery Gin makes a great Gin &amp; Tonic but it's a versatile spirit that can be enjoyed in many other ways. Here are a few ideas...</p>
      </article>

      <div className={styles.botanicals}>
        <Link to="serves/ginandtonic" aria-label="Gin &amp; Tonic">
          <figure>
            <figcaption>Gin &amp; Tonic</figcaption>
            <Img fixed={data.ginandtonic.childImageSharp.fixed} />
          </figure>
        </Link>
        <Link to="serves/martini" aria-label="Martini">
          <figure>
            <figcaption>Martini</figcaption>
            <Img fixed={data.martini.childImageSharp.fixed} />
          </figure>
        </Link>
        <Link to="serves/ginbuck" aria-label="Martini">
          <figure>
            <figcaption>Gin Buck</figcaption>
            <Img fixed={data.ginbuck.childImageSharp.fixed} />
          </figure>
        </Link>
        <Link to="serves/neat" aria-label="Martini">
          <figure>
            <figcaption>Neat</figcaption>
            <Img fixed={data.neat.childImageSharp.fixed} />
          </figure>
        </Link>
        <Link to="serves/hankypanky" aria-label="Martini">
          <figure>
            <figcaption>Hanky Panky</figcaption>
            <Img fixed={data.hankypanky.childImageSharp.fixed} />
          </figure>
        </Link>
        <Link to="serves/hotpunch" aria-label="Martini">
          <figure>
            <figcaption>Hot Punch</figcaption>
            <Img fixed={data.hotpunch.childImageSharp.fixed} />
          </figure>
        </Link>
      </div>
    </Layout>
  )
}

export default ServesPage
