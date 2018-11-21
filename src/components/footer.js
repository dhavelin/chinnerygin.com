import React from "react"
import Img from "gatsby-image"
import { StaticQuery, Link } from "gatsby"
import styles from "./footer.module.scss"
import logo from "../../static/images/logo.png"

export default () => (
  <>
    <nav className={styles.menuFooter}>
      <ul>
        <li><Link to="/contact/">Contact</Link></li>
        <li><Link to="/privacy/">Privacy</Link></li>
        <li><Link to="/company/">Company Details</Link></li>
        <li><a href="https://www.temperance.ie">Temperance</a></li>
      </ul>
    </nav>
    <div className={styles.logo}>
      <Link to="/" aria-label="Home page"><Image /></Link>
    </div>
    <p className={styles.copyright}>© Chinnery Spirits Ltd 2018</p>
  </>
)

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo_white.png" }) {
          childImageSharp {
            fixed(width: 130) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.logo.childImageSharp.fixed} fadeIn={false} critical/>}
  />
)