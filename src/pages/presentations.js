import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Search from '../components/Search'
import SEO from '../components/SEO'

import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

export default function BlogIndex({ data, ...props }) {
  const posts = data.allMarkdownRemark.edges
  const simplifiedPosts = useMemo(() => getSimplifiedPosts(posts), [posts])

  return (
    <Layout>
      <Helmet title={`Presentations | ${config.siteTitle}`} />
      <SEO customDescription="Presentations from Talks presented at Conferences" />
      <header>
        <div className="container">
          <h1>Blogs</h1>
          <p className="subtitle">
            Conference Presentations
          </p>
        </div>
      </header>
      <section>
        <div className="container">
          <Search posts={simplifiedPosts} {...props} />
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PresentationQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "presentations" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            categories
          }
        }
      }
    }
  }
`
