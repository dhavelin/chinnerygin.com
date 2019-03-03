import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import styles from "../components/layout.module.scss"

export default () => (
  <Layout>
    <Helmet>
      <title>Sales | Chinnery Gin</title>
      <meta name="Description" content="Contact our sales team for information on how to stock Chinnery Gin." />
    </Helmet>
    <article className={styles.article}>
      <h1>Sales</h1>
      <div id="content">
        <p>Our distributors in Ireland are:</p>
        <ul>
          <li>The <a href="https://www.celticwhiskeyshop.com/index.php?route=information/information&amp;information_id=10">Celtic Whiskey Shop</a></li>
          <li><a href="http://www.classicdrinks.ie/">Classic Drinks</a></li>
        </ul>
        <p>For international enquiries, please contact Marie Byrne at <a href="mailto:marie@chinneryspirits.com">marie@chinneryspirits.com</a></p>
      </div>
    </article>
  </Layout>
)
