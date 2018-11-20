import React from "react"
import styles from "./quote.module.scss"

export default (props) => (
  <blockquote>
    {props.children}
    <br />
    <cite>- {props.citation}</cite>
  </blockquote>
)