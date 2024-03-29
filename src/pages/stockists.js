import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Stockist from "../components/stockist"
import Layout from "../components/layout"
import Head from "../components/head"
import styles from "../components/layout.module.scss"

const StockistsPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allDatoCmsStockist (
        sort: {
          fields: [
            county,
            name,
            sortOrder
          ]
          order: ASC
        }
      ){
        group(field: county) {
          fieldValue
          totalCount
          edges {
            node {
              name
              address
              county
              link
              id
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Stockists" description="Where to buy Chinnery Gin."/>
      <article className={styles.article}>
        <p className={styles.subtitle}>Stockists</p>
        <h1>Where to buy</h1>
        <p className={styles.note}>[&#8201;If you are a bar or off-licence looking to stock Chinnery Gin, please <Link to="/sales/">see here</Link>.&#8201;]</p>
        <p>If you are seeking Christmas hampers featuring Chinnery Gin, many off-licences can make them up for you on request. We have gathered a few examples on our <Link to="/hampers/">hampers page</Link>.</p>
        {
          data.allDatoCmsStockist.group.map((countyGroup, i) =>
            <>
              <h2 className={styles.county} key={i}>{countyGroup.fieldValue}</h2>
              {countyGroup.edges.map(stockist =>
                <Stockist key={stockist.node.id} name={stockist.node.name} address={stockist.node.address} url={stockist.node.link} />
              )}
            </>
          )
        }
      </article>
    </Layout>
  )
}
export default StockistsPage
