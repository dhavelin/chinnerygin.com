import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Stockist from "../components/stockist"
import Layout from "../components/layout"
import styles from "../components/layout.module.scss"

export default ({data}) => (
  <Layout>
    <Helmet>
      <title>Stockists | Chinnery Gin</title>
      <meta name="Description" content="Where to buy Chinnery Gin." />
    </Helmet>
    <article>
      <p className={styles.subtitle}>Stockists</p>
      <h1>Where to buy</h1>
      {data.allStockistsJson.edges.map((county, i) =>
        <>
        <h2 className={styles.county} key={i}>{county.node.county}</h2>
        {county.node.outlets.map((stockist, j) =>
          <Stockist key={j} name={stockist.name} address={stockist.address} url={stockist.url} />
        )}
        </>
      )}
    </article>
  </Layout>
)

export const stockists = graphql`
{
  allStockistsJson {
    edges {
      node {
        county
        outlets {
          name
          address
          url
        }
      }
    }
  }
}
`