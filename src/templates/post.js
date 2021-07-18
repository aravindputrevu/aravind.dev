import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Suggested from '../components/Suggested'
import SEO from '../components/SEO'
import Comment from '../components/Comment'

import config from '../utils/config'
import { slugify } from '../utils/helpers'

export default function PostTemplate({ data, pageContext }) {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  const { tags, thumbnail, title, description, date } = post.frontmatter
  const commentBox = React.createRef()

  useEffect(() => {
    const commentScript = document.createElement('script')
    const theme =
      typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
        ? 'github-dark'
        : 'github-light'
    commentScript.async = true
    commentScript.src = 'https://utteranc.es/client.js'
    commentScript.setAttribute('repo', 'aravindputrevu/comments') // CHANGE THIS if you're just going to clone this repo and use the code. Do not test your code using my repo.
    commentScript.setAttribute('issue-term', 'pathname')
    commentScript.setAttribute('id', 'utterances')
    commentScript.setAttribute('theme', theme)
    commentScript.setAttribute('crossorigin', 'anonymous')
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
  }, []) // eslint-disable-line

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
      <SEO postPath={post.fields.slug} postNode={post} postSEO />
      <div className="container">
        <article>
          <header className="article-header">
            <div className="container">
              <div className="thumb">
                {thumbnail && (
                  <Img
                    fixed={thumbnail.childImageSharp.fixed}
                    className="post-thumbnail"
                  />
                )}
                <div>
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="post-meta">
                <div>
                  Written by <Link to="/about">Aravind</Link> on{' '}
                  <time>{date}</time>
                </div>
                {tags && (
                  <div className="tags">
                    {tags.map((tag) => (
                      <Link
                        key={tag}
                        to={`/tags/${slugify(tag)}`}
                        className={`tag-${tag}`}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {description && <p className="description">{description}</p>}
          </header>
          {
            post.tableOfContents && (              
              <div>
              <h3 className="toc-heading">Table of Contents</h3>
              <div className="toc" dangerouslySetInnerHTML={{ __html: post.tableOfContents }}/>              
              </div>
            )
          }
          <div id="revue-embed" className="newsletter-container">
            <form action="http://newsletter.aravind.dev/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
                <div id="newsletter-text" className="">
                   <label for="member_email"><b>Want to read similar articles? Subscribe to my newsletter or see a sample <a href="https://newsletter.aravind.dev">here</a></b></label>
                </div>
                <div class="revue-form-group">
                    <input class="newsleter-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email"></input>
                    <input type="submit" className="newsletter-subscribe-button" value="Subscribe" name="member[subscribe]" id="member_submit"></input>
                </div>
            </form>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <div id="revue-embed" className="newsletter-container">
            <form action="http://newsletter.aravind.dev/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
                <div id="newsletter-text" className="">
                <label for="member_email"><b>Want to read similar articles? Subscribe to my newsletter or see a sample <a href="https://newsletter.aravind.dev">here</a></b></label>
                </div>
                <div class="revue-form-group">
                    <input class="newsleter-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email"></input>
                    <input type="submit" className="newsletter-subscribe-button" value="Subscribe" name="member[subscribe]" id="member_submit"></input>
                </div>
            </form>
          </div>
          <div id="comments">
            <h2>Comments</h2>
            <Comment commentBox={commentBox} />
          </div>
        </article>
        <Suggested previous={previous} next={next} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        description
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        featuredImage {
          childImageSharp {
            fixed(width: 1200, height: 628) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
