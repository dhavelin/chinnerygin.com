import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import styles from "../components/layout.module.scss"

var width = {
  width: '100%'
}
var padding = {
  padding: 0
}
var position = {
  position: 'absolute',
  left: '-5000px'
}

export default ({data}) => (
  <Layout>
    <Helmet>
      <title>Newsletter | Chinnery Gin</title>
      <meta name="Description" content="Subscribe to our newsletter to get the latest news from the world of Chinnery Gin - upcoming events, new products, new articles on the blog, etc." />
    </Helmet>
    <article>
      <p className={styles.subtitle}>Stay in touch</p>
      <h1>Newsletter</h1>
      <p><link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
      </p>
      <div id="mc_embed_signup" style={width}>
        <form action="https://chinnerygin.us18.list-manage.com/subscribe/post?u=9ef0ab31b5d674854e3dc31c1&amp;id=13fcdcf01a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className={'validate'} target="_blank" noValidate="" style={padding}>
          <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL">Subscribe to our newsletter...</label>
            <input type="email" defaultValue="" name="EMAIL" className={'email'} id="mce-EMAIL" placeholder="email address" required="" />
            <div style={position} aria-hidden="true"><input type="text" name="b_9ef0ab31b5d674854e3dc31c1_13fcdcf01a" tabIndex="-1" defaultValue="" /></div>
            <div className={'clear'}><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className={'button'} /></div>
          </div>
        </form>
      </div>

      <p>Your email address will only be used to send you news from the world of Chinnery Spirits. It will never be shared with any third parties.</p>

      <p>You can change your mind at any time by clicking the unsubscribe link in the footer of any email you receive from us, or by contacting us directly.</p>
    </article>
  </Layout>
)
