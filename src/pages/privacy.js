import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Helmet>
      <title>Privacy statement</title>
    </Helmet>
    <article>
      <h1>Privacy Policy</h1>
      <p>This Privacy Policy describes how your personal information is collected and used when you visit <a href="https://www.chinnerygin.com">https://www.chinnerygin.com</a> (the “Site”).</p>
      <h2 id="personal-information-we-don-t-collect">Personal information we <em>don’t</em> collect</h2>
      <p>Unlike most websites, we do not automatically collect information about you or your device. We are just delighted that you choose to spend time engaging with Chinnery Gin.</p>
      <p>We do not know your web browser, IP address, location, how long you spent on the Site or which pages you visited while you were on the Site.</p>
      <p>We do not set cookies of any sort so we don’t know if you have previously visited the Site.</p>
      <p>We do not allow third parties (like Facebook) to set cookies on the Site. So they cannot track you here either.</p>
      <h2 id="personal-information-we-do-collect">Personal information we <em>do</em> collect</h2>
      <p>We invite you to share your email address with us so we may send you a newsletter replete with news and happenings in the Chinnery Gin world.</p>
      <p>Subscriptions to our email newsletter and the sending of the newsletter are managed by Mailchimp. Mailchimp  uses analytics to track engagement with the newsletter. This is <a href="https://mailchimp.com/legal/privacy/">Mailchimp’s privacy policy</a>.</p>
      <p>You can request to unsubscribe from the newsletter at any time (by clicking the unsubscribe link at the end of any newsletter, or by contacting us directy) at which point we will delete your email address from our records.</p>
      <p>We will never share your email address with third parties unless it is to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
      <h2 id="your-rights">Your rights</h2>
      <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>
      <p>If you are not a European resident, you are welcome to exercise the same right.</p>
      <h2 id="minors">Minors</h2>
      <p>The Site is not intended for individuals below the age at which it is permitted to purchase alcohol in their jurisdiction.</p>
      <h2 id="changes">Changes</h2>
      <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
      <h2 id="contact-us">Contact us</h2>
      <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please <Link to="/contact/">contact us.</Link></p>
    </article>
  </Layout>
)
