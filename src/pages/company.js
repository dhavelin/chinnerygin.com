import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Helmet>
      <title>Company details | Chinnery Gin</title>
    </Helmet>
    <article>
      <h1>Company Details</h1>
      <div id="content"><p>Chinnery Spirits Ltd is a registered company in Ireland.</p>
        <p>Company Number: 580419</p>
        <p>Chinnery Spirits Ltd,<br />Synergy Centre,<br />D24 A386,<br />Ireland</p>
      </div>
    </article>
  </Layout>
)
