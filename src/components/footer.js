import React from "react"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./footer.module.scss"

const Footer = () => {

  return (
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
}

export default Footer;

const Image = () => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "images/logo_white.png" }) {
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
    <Img fixed={logo.childImageSharp.fixed} fadeIn={false} critical/>
  )
}