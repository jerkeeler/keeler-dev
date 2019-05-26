import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Now = () => (
  <Layout>
    <SEO
      title="now"
      description="Jeremy's now page. What he is up to NOW. Music he's listening to, what he's doing, what books he's reading."
    />

    <h1>Now</h1>

    <p>
      This is my{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://nownownow.com/">
        now page
      </a>
      .
    </p>

    <h3>JMT Prep</h3>

    <p>
      I'm currently planning on doing a two week segment of the John Muir Trail with my brother (more info in various{' '}
      <Link to="/">blog posts</Link>) from August 4th to August 16th. In order to prepare I've been ordering new
      supplies, working out more, and eating healthier (harder, better, faster, stronger).
    </p>

    <h3>Work</h3>

    <p>
      Living it up at{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://www.affirm.com/">
        Affirm
      </a>{' '}
      in NYC. Software engineer doing software engineer things. 9-5 most days, but every other week I still find I'm
      doing those late night startup hours.
    </p>

    <h3>Music</h3>

    <p>Listening to...</p>

    <ul>
      <li>Billie Eilish</li>
      <li>Zelda 25th Anniversary Soundtrack</li>
      <li>MisterWives</li>
      <li>Can't Stop Won't Stop</li>
    </ul>

    <h3>Books</h3>

    <p>
      I'm still finishing up the fantastic{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/The_Wheel_of_Time">
        Wheel of Time Series
      </a>{' '}
      by Robert Jordan. I'm currently part way through the 11th book! I'm so excited about these few concluding books!
    </p>
  </Layout>
);

export default Now;
