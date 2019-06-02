import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import styles from "../components/layout.module.scss"

const SalesPage = () => {
  return (
    <Layout>
      <Head title="Sales" description="Contact our sales team for information on how to stock Chinnery Gin."/>
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
}

export default SalesPage