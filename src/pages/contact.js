import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"


const ContactPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact us | Chinnery Gin</title>
        <meta name="Description" content="We welcome comments and questions by email (or post)." />
      </Helmet>
      <article>
        <h1>Contact Us</h1>
        <div id="content">
          <p>Email us at: <a href="mailto:contact@chinneryspirits.com">contact@chinneryspirits.com</a></p>
          <p>Or consign your message to the postal system like it’s 1799:</p>
          <p>Chinnery Spirits Ltd,<br />Synergy Centre,<br />ITT Dublin,<br />D24 A386,<br />Ireland</p>
        </div>
      </article>
    </Layout>
  )
}

export default ContactPage
