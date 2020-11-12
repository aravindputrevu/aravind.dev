import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import config from '../utils/config'

const randomGenerator = () => {
  return Math.floor(Math.random())
}

export default function FourOhFour() {
  return (
    <Layout>
      <Helmet title={`404 | ${config.siteTitle}`} />
      <SEO />
      <div className="container">
        <header>
          <h1>Four Not Four ;)</h1> 
          <p className="subtitle">Now that you're here. Let us see the history of <a href="https://queenofsubtle.com/404/?page_id=1921"
          target="_blank"
          rel="noopener noreferrer">4not4</a>. </p>
            <div>

            <p>HTTP status codes were established by the World Wide Web Consortium (W3C) in 1992, as a part of the HTTP 0.9 spec. 
                 They were defined by <a href="https://twitter.com/timberners_lee"
                    target="_blank"
                    rel="noopener noreferrer">
                    Tim Berners-Lee 
                 </a>, the same person who single-handedly invented the web and the first web browser in 1990.</p>
            
            <ul className="notfound">
              <li>
                 The first <b>4</b> indicates a client error. The server is saying that you’ve done something wrong, such as misspell the URL or request a page which is no longer there. Conversely, a 5xx error indicates a server-side problem. It also indicates an error which may be transient; if you try it again, it may work.
              </li>
              <li>
                 The middle <b>0</b> refers to a general syntax error. This could indicate a spelling mistake.
              </li>
              <li>
                 The last <b>4</b> just indicates the specific error in the group of 40x, which also includes 400: Bad Request, 401: Unauthorized, etc.
              </li>
            </ul>

            It’s been said that 404 was named after a room at CERN (if you read about Tim Berners-Lee above, you’ll know that that’s where the web began) where the original web servers were located. However, Tom S. tells us:

            <blockquote>“Having visited CERN myself, I can tell you that Room 404 is not on the fourth floor – the CERN office numbering system doesn’t work like that – the first digit usually refers to the *building* number (ie. building 4), and the second two to the office number. 
              But, strangely, there is no room “04” in building “4”, the offices start at “410” and work upwards – don’t ask me why. 
              Sorry to disappoint you all, but there is no Room 404 in CERN – it simply doesn’t exist, and certainly hasn’t been preserved as “the place where the web began”. 
              In fact, there *is* a display about this, including a model of the first NeXT server, but the whole “Room 404″ thing is just a myth.”</blockquote>

            According to the W3C, 404 Not Found is only supposed to be used in cases where the server cannot find the requested location and is unsure of its status. 
            If a page has permanently been deleted, it is supposed to use 410: Gone to indicate a permanent change. But has anyone ever seen 410? It must be 404…
            </div>
        </header>
      </div>
    </Layout>
  )
}
