import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const CompanyPage = () => {
  return (
    <Layout>
      <Head title="Company details" description="Chinnery Spirits Ltd is a registered company in Ireland."/>
      <article>
        <h1>Company Details</h1>
        <div id="content"><p>Chinnery Spirits Ltd is a registered company in Ireland.</p>
          <p>Company Number: 580419</p>
          <p>Chinnery Spirits Ltd,<br />Synergy Centre,<br />D24 A386,<br />Ireland</p>
        </div>
      </article>
    </Layout>
  )
}

export default CompanyPage
