import React from "react"
import styles from "./stockist.module.scss"

export default (props) => (
  <div className={styles.stockist}>
    <h3>{props.name}</h3>
    <p>{props.address}</p>
    <p><a href={props.url}>Website</a></p>
  </div>
)