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
      <li>Billie Eilish</li>
      <li>Zelda 25th Anniversary Soundtrack</li>
      <li>
        <a href="https://open.spotify.com/playlist/5A4KncYhd95iKPaIYnjl5B?si=SzjzWMupQmu-S9AKtr0INQ">Zelda and Chill</a>{' '}
        lofi remixes of Zelda soundtrack
      </li>
    </ul>

    <h3>Books</h3>

    <p>
      I just finished the fantastic <a href="https://en.wikipedia.org/wiki/The_Wheel_of_Time">Wheel of Time Series</a>{' '}
      by Robert Jordan. I'm now on to the Expand series!
    </p>

    <h3>Games</h3>

    <p>I'm currently playing the following video games...</p>

    <ul>
      <li>Civilization 6 (Switch)</li>
      <li>Age of Empires II (PC)</li>
      <li>Skyrim (Switch)</li>
    </ul>
  </Layout>
);

export default Now;
