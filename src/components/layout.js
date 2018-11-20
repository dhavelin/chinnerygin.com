import React from "react"
import Header from "./header"
import Footer from "./footer"
import styles from "./layout.module.scss"

export default ({ children }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <Header />
    </header>
    <main className={styles.main}>
      {children}
    </main>
    <footer className={styles.footer}>
      <Footer />
    </footer>
  </div>
)