import React from "react"
import styles from "./fig.module.scss"

export default (props) => (
  <figure>
    <img src={props.src} alt={props.caption}/>
    <figcaption className={styles.caption}>{props.caption}</figcaption>
  </figure>
)