import React from "react"
import Img from "gatsby-image"
import { StaticQuery, Link } from "gatsby"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from "./header.module.scss"

export default () => (
  <>
    <div className={styles.logo}>
      <Link to="/">
        <Image />
      </Link>
    </div>
    <nav className={styles.menuMain}>
      <ul>
        <li><Link to="/gin/" activeClassName={styles.current}>The Gin</Link></li>
        <li><Link to="/george/" activeClassName={styles.current}>The Artist</Link></li>
        <li><Link to="/newsletter/" activeClassName={styles.current}>Newsletter</Link></li>
      </ul>
    </nav>
    <nav className={styles.menuSocial}>
      <ul>
        <li><a href="https://www.facebook.com/chinnerygin">< FaFacebook /></a></li>
        <li><a href="https://www.instagram.com/chinnerygin">< FaInstagram /></a></li>
        <li><a href="https://www.twitter.com/chinnerygin">< FaTwitter /></a></li>
      </ul>
    </nav>
  </>
)

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo_black.png" }) {
          childImageSharp {
            fixed(width: 130) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.logo.childImageSharp.fixed}/>}
  />
)