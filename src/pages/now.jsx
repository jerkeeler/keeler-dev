import React from 'react';

import Layout from '../components/Layout';
import H1 from '../components/typography/H1';
import SEO from '../components/SEO';
import P from '../components/typography/P';
import H3 from '../components/typography/H3';
import ExternalLink from '../components/typography/ExternalLink';
import List from '../components/typography/List';

const Now = () => (
  <Layout>
    <SEO
      title="now"
      description="Jeremy's now page. What he is up to NOW. Music he's listening to, what he's doing, what books he's reading."
    />
    <H1>Now.</H1>
    <P>
      What is a{' '}
      <ExternalLink to="https://nownownow.com/">now page</ExternalLink>?
    </P>
    <H3>Work</H3>
    <P>
      Living it up at{' '}
      <ExternalLink to="https://affirm.com">Affirm</ExternalLink> in NYC.
      Software engineer doing software engineer things. 9-6 most days, but every
      other week I still find I'm doing those late night startup hours.
    </P>
    <H3>Music</H3>
    <P>Listening to...</P>
    <List>
      <List.Item>Billie Eilish</List.Item>
      <List.Item>
        <ExternalLink to="https://open.spotify.com/playlist/5A4KncYhd95iKPaIYnjl5B?si=SzjzWMupQmu-S9AKtr0INQ">
          Zelda and Chill
        </ExternalLink>{' '}
        lofi remixes of Zelda soundtrack
      </List.Item>
      <List.Item>Lord of the Rings soundtrack</List.Item>
    </List>
    <H3>Books</H3>
    <P>
      I'm currently reading{' '}
      <ExternalLink to="https://www.amazon.com/Annals-Former-World-John-McPhee/dp/0374518734">
        Annals of the Former World
      </ExternalLink>{' '}
      by{' '}
      <ExternalLink to="https://en.wikipedia.org/wiki/John_McPhee">
        John McPhee
      </ExternalLink>
      .
    </P>
    <H3>Games</H3>
    <P>I'm currently playing...</P>
    <List>
      <List.Item>
        <ExternalLink to="https://store.steampowered.com/app/221380/Age_of_Empires_II_2013/">
          Age of Empires II (HD)
        </ExternalLink>
      </List.Item>
      <List.Item>
        <ExternalLink to="https://www.stardewvalley.net/">
          Stardew Valley
        </ExternalLink>
      </List.Item>
      <List.Item>
        <ExternalLink to="https://www.animal-crossing.com/new-horizons/">
          Animal Crossing: New Horizons
        </ExternalLink>
      </List.Item>
    </List>
  </Layout>
);

export default Now;
