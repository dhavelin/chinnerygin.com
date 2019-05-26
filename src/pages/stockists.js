import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Stockist from "../components/stockist"
import Layout from "../components/layout"
import styles from "../components/layout.module.scss"

const StockistsPage = ({data}) => {
  return (
    <Layout>
      <Helmet>
        <title>Stockists | Chinnery Gin</title>
        <meta name="Description" content="Where to buy Chinnery Gin." />
      </Helmet>
      <article className={styles.article}>
        <p className={styles.subtitle}>Stockists</p>
        <h1>Where to buy</h1>
        <p className={styles.note}>[&#8201;If you are a bar or off-licence looking to stock Chinnery Gin, please <Link to="/sales/">see here</Link>.&#8201;]</p>
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
}
export default StockistsPage

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