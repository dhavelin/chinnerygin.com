import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import styles from "../components/layout.module.scss"

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" description="Articles from Chinnery's World."/>
      <article>
        <p className={styles.subtitle}>Blog</p>
        <h1>Chinnery's World</h1>
        <ol>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                </Link>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            )
          })}
        </ol>
      </article>
    </Layout>
  )
}

export default BlogPage

/*
export const postsQuery = graphql`
query postsQuery {
  allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
  ) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
  }
}
`
*/

