import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, Link, graphql } from "gatsby"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from "./header.module.scss"

const Header = () => {
  return (
    <>
      <div className={styles.logo}>
        <Link to="/" aria-label="Home page"><Image /></Link>
      </div>
      <nav className={styles.menuMain}>
        <ul>
          <li><Link to="/gin/" activeClassName={styles.current}>The Gin</Link></li>
          <li><Link to="/george/" activeClassName={styles.current}>The Artist</Link></li>
          <li><Link to="/newsletter/" activeClassName={styles.current}>Newsletter</Link></li>
          <li><Link to="/stockists/" activeClassName={styles.current}>Stockists</Link></li>
          <li><Link to="/serves/" activeClassName={styles.current}>Serves</Link></li>
          <li><Link to="/gifting/" activeClassName={styles.current}>Gifting</Link></li>
        </ul>
      </nav>
      <nav className={styles.social}>
        <ul>
          <li><a href="https://www.twitter.com/chinnerygin" aria-label="Twitter">< FaTwitter size={32}/></a></li>
          <li><a href="https://www.facebook.com/chinnerygin" aria-label="Facebook">< FaFacebook size={32} /></a></li>
          <li><a href="https://www.instagram.com/chinnerygin" aria-label="Instagram">< FaInstagram size={32} /></a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header

const Image = () => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "images/logo_black.png" }) {
          childImageSharp {
            fixed(width: 130) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  )
  return (
    <Img fixed={logo.childImageSharp.fixed} style={{display:'block'}} alt="Chinnery Spirits logo"/>
  )
}
