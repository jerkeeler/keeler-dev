import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Now = () => (
  <Layout>
    <SEO
      title="now"
      description="Jeremy's now page. What he is up to NOW. Music he's listening to, what he's doing, what books he's reading."
    />

    <h1>Now.</h1>

    <p>
      What is a <a href="https://nownownow.com/">now page</a>?
    </p>

    <h3>JMT</h3>

    <p>
      I just finished doing ~123 miles of the{' '}
      <a href="https://www.pcta.org/discover-the-trail/john-muir-trail/">John Muir Trail</a>! It was one of the best
      experiences of my life and I can't wait to plan and hike my next long trail.
    </p>

    <h3>Work</h3>

    <p>
      Living it up at <a href="https://www.affirm.com/">Affirm</a> in NYC. Software engineer doing software engineer
      things. 9-6 most days, but every other week I still find I'm doing those late night startup hours.
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
      <a href="https://en.wikipedia.org/wiki/The_Wheel_of_Time">Wheel of Time Series</a> by Robert Jordan. I'm currently
      part way through the final book!
    </p>

    <h3>Games</h3>

    <p>I'm currently playing the following video games...</p>

    <ul>
      <li>Skyrim (Switch)</li>
      <li>Stardew Valley (Switch)</li>
      <li>Age of Empires II (PC)</li>
    </ul>
  </Layout>
);

export default Now;
