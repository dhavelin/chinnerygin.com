import React from 'react'
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import styles from "../components/layout.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
      }
      html
    }
  }
`

const BlogPost = (props) => {

    // extract the contents from data
    const { markdownRemark } = props.data;
    const { frontmatter, html } = markdownRemark;

    // return the component layout
    return (
      <Layout>
        <Helmet>
          <title>{ frontmatter.title } | Chinnery Gin</title>
        </Helmet>
        <article className={styles.article}>
          <p className={styles.subtitle}>Blog</p>
          <h1>{ frontmatter.title }</h1>
          <p className={styles.byline}>{ frontmatter.date } / <span className={styles.author}>by { frontmatter.author }</span></p>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </article>
      </Layout>
    );
}
export default BlogPost;
