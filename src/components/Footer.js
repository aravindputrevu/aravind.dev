import React from 'react'
import { Link } from 'gatsby'

import gatsby from '../../content/thumbnails/gatsby.png'
import github from '../../content/thumbnails/github.png'
import original_source from '../../content/thumbnails/original-tag.png'

export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container">
        <nav className="footer-links">
          <Link to="/blog">Blogs</Link>
          <Link to="/guides">Guides</Link>
          <a
            href="https://putrevu.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Newsletter
          </a>
          <a
            href="https://twitter.com/aravindputrevu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <Link to="/rss.xml">RSS</Link>
        </nav>
        
        <nav className="flex justify-center">
          <a
            href="https://www.gatsbyjs.org/"
            title="Built with Gatsby"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={gatsby} className="footer-img" alt="Gatsby" />
          </a>
          <a
            href="https://github.com/aravindputrevu"
            title="Open-source on GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={github} className="footer-img" alt="GitHub" />
          </a>
          <a
            href="https://github.com/taniarascia/taniarascia.com"
            title="Original Theme Source"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={original_source} className="footer-img" alt="OG Source" />
          </a>
        </nav>
      </section>
    </footer>
  )
}
