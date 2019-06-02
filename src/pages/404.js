import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Head from "../components/head"
import styles from "../components/layout.module.scss"

const NotFoundPage = () => {

  const data = useStaticQuery(graphql`
    query {
      martini: file(relativePath: { eq: "images/serves/ChinneryGinMartini.jpg" }) {
        ...botanicalImage
      }
    }
  `)

  return (
    <Layout>
      <Head title="Serves" description="How to serve Chinnery Gin in various cocktails."/>
      <article>
        <p className={styles.subtitle}>Oops</p>
        <h1>Page not found</h1>
        <p>Something went wrong there. But since you're here, have a martini, regroup, and <Link to="/" aria-label="Home">try again</Link>.</p>
      </article>

      <div className={styles.botanicals}>
        <Link to="serves/martini" aria-label="Martini">
          <figure>
            <figcaption>Martini</figcaption>
            <Img fixed={data.martini.childImageSharp.fixed} />
          </figure>
        </Link>
      </div>
    </Layout>
  )
}
export default NotFoundPage
