import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import styles from "../components/layout.module.scss"

function getPosts(data) {
  let posts = [];
  let postsList = data.allMarkdownRemark.edges;
  postsList.forEach(element => {
    let postData = element.node.frontmatter;

    posts.push(
      <Link key={postData.slug} to={`${postData.slug}`}><h2>{postData.title}</h2></Link>
    );
  });

  return posts;
}

const BlogPage = ({data}) => {
  return (
    <Layout>
      <Helmet>
        <title>Blog | Chinnery Gin</title>
        <meta name="Description" content="Articles from Chinnery's World." />
      </Helmet>
      <article>
        <p className={styles.subtitle}>Blog</p>
        <h1>Chinnery's World</h1>
        { getPosts(data) }
      </article>
    </Layout>
  )
}

export default BlogPage

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

