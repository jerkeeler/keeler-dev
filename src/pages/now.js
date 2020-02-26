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

    <h3>Work</h3>

    <p>
      Living it up at <a href="https://www.affirm.com/">Affirm</a> in NYC. Software engineer doing software engineer
      things. 9-6 most days, but every other week I still find I'm doing those late night startup hours.
    </p>

    <h3>Music</h3>

    <p>Listening to...</p>

    <ul>
      <li>Low fi focus mixes on Spotify</li>
      <li>
        <a href="https://open.spotify.com/playlist/5A4KncYhd95iKPaIYnjl5B?si=SzjzWMupQmu-S9AKtr0INQ">Zelda and Chill</a>{' '}
        lofi remixes of Zelda soundtrack
      </li>
    </ul>

    <h3>Books</h3>

    <p>
      I'm currently reading{' '}
      <a href="https://www.amazon.com/Leviathan-Wakes-Expanse-Book-1-ebook/dp/B0047Y171G">The Expanse</a> and{' '}
      <a href="https://www.amazon.com/Annals-Former-World-John-McPhee/dp/0374518734">Annals of the Former World</a>
    </p>

    <h3>Games</h3>

    <p>I'm currently playing the following video games...</p>

    <ul>
      <li>Age of Empires II (PC)</li>
      <li>Stardew Valley</li>
    </ul>
  </Layout>
);

export default Now;
