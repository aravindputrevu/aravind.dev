import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Posts from '../components/Posts'
import Guides from '../components/Guides'
import Projects from '../components/Projects'
import SEO from '../components/SEO'

import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'

import projects from '../data/projects'
import videos from '../data/videos'

import aravind from '../../content/images/aravind-2020.jpg'

export default function BlogIndex({ data }) {
  const latest = data.latest.edges
  const popular = data.popular.edges
  const presentations = data.presentations.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])
  const simplifiedPopular = useMemo(() => getSimplifiedPosts(popular), [
    popular,
  ])
  const simplifiedPresentations = useMemo(() => getSimplifiedPosts(presentations), [presentations])

  const Section = ({ title, children, button, ...props }) => (
    <section {...props}>
      <h2>
        {title}
        {button && (
          <Link className="section-button" to="/blog">
            View all
          </Link>
        )}
      </h2>
      {children}
    </section>
  )

  const PresentationSection = ({ title, children, button, ...props }) => (
    <section {...props}>
      <h2>
        {title}
        {button && (
          <Link className="section-button" to="/presentations">
            View all
          </Link>
        )}
      </h2>
      {children}
    </section>
  )

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <section className="lead">
        <div className="container">
          <div>
            <h1>
              Hello! I'm Aravind Putrevu.
            </h1>
            <p>
              Helping developers solve their problems! </p><p>
              I write to express. You can find blog posts about Code, Product &amp; Tech Policy.<br></br>
              You can read my{' '}
              <Link to="/blog">articles</Link>, try {' '}
              <Link to="/guides">guides &amp; codelabs</Link>, or know more{' '}
              <Link to="/about">about me</Link>.

            </p>
            <a href="https://twitter.com/aravindputrevu?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="medium" data-text="Follow me" data-show-count="true">Follow @aravindputrevu</a>
          </div>
          <div className="image">
            <img src={aravind} alt="Aravind" />
          </div>
        </div>

      </section>
      <div className="container index">
        <Section title="Latest Blog Posts" button>
          <Posts data={simplifiedLatest} />
        </Section>

        <Section title="Popular Blog Posts" button>
          <Posts data={simplifiedPopular} />
        </Section>
        
        <PresentationSection title="Presentations" button>
          <Posts data={simplifiedPresentations} />
        </PresentationSection>
        
        <Section title="Code Samples">
          <Projects data={projects} />
        </Section>
        
        <Section title="Videos">
          <Guides data={videos} frontPage />
        </Section>
        
        <Section>
        <div id="revue-embed" className="newsletter-container">
            <form action="http://newsletter.aravind.dev/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
                <div id="newsletter-text" className="">
                   <label for="member_email"><b>Want to read similar articles? Subscribe to my newsletter</b></label>
                </div>
                <div class="revue-form-group">
                    <input class="newsleter-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email"></input>
                    <input type="submit" className="newsletter-subscribe-button" value="Subscribe" name="member[subscribe]" id="member_submit"></input>
                </div>
            </form>
          </div>
        </Section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" }, tags: { eq: "tech" } , hidden: { eq: false } } }
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
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 20
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
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
          }
        }
      }
    }
    presentations: allMarkdownRemark(
      limit: 5
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
          }
        }
      }
    }
  }
`
