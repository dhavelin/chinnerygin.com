import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.scss"

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Chinnery Gin</title>
      </Helmet>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        {props.children}
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout