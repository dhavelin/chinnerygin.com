import React from 'react'
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import styles from "../components/layout.module.scss"

const BlogPostTemplate = ({ data }) => {

    // extract the contents from data
    const { markdownRemark } = data;
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
export default BlogPostTemplate;

export const postDataQuery = graphql`
query postDataQuery($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`