import React from "react"

export default (props) => (
  <blockquote>
    {props.children}
    <br />
    <cite>- {props.citation}</cite>
  </blockquote>
)