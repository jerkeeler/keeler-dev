import React from 'react';
import { Helmet } from 'react-helmet';

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
      title="Now"
      description="Jeremy's now page. What he is up to NOW. Music he's listening to, what he's doing, what books he's reading."
    />
    <Helmet
      script={[
        {
          type: 'text/javascript',
          async: true,
          src: 'https://platform.twitter.com/widgets.js',
          chartset: 'utf-8',
        },
      ]}
    />
    <H1>Now</H1>
    <P>
      What is a{' '}
      <ExternalLink to="https://nownownow.com/">now page</ExternalLink>?
    </P>
    <H3>Latest Tweet</H3>
    <P className="grid justify-center">
      <a
        className="twitter-timeline"
        href="https://twitter.com/jerkeeler?ref_src=twsrc%5Etfw"
        data-tweet-limit="1"
        data-height="200"
        data-width="600"
        data-dnt="true"
      >
        Loading latest tweet by Jeremy...
      </a>{' '}
    </P>
    <H3>Work...</H3>
    <P>
      Living in Ann Arbor and pursuing a Ph.D. in paleoclimatology from the{' '}
      <ExternalLink to="https://umich.edu">University of Michigan</ExternalLink>
      .{' '}
    </P>
    <H3>Music...</H3>
    <List>
      <List.Item>
        <ExternalLink to="https://music.apple.com/us/artist/vulfpeck/449917675">
          vulfpeck
        </ExternalLink>
      </List.Item>
      <List.Item>
        <ExternalLink to="https://music.apple.com/us/playlist/todays-chill/pl.2bb29727dbc34a63936787297305c37c">
          Today's Chill
        </ExternalLink>{' '}
        on Apple Music
      </List.Item>
    </List>
    <H3>Reading...</H3>
    <P>
      I'm currently reading{' '}
      <ExternalLink to="https://www.amazon.com/Annals-Former-World-John-McPhee/dp/0374518734">
        Annals of the Former World
      </ExternalLink>
      ,{' '}
      <ExternalLink to="https://en.wikipedia.org/wiki/Dune_%28novel%29">
        Dune
      </ExternalLink>
      , and{' '}
      <ExternalLink to="https://www.amazon.com/Sixth-Extinction-Unnatural-History/dp/0805092994">
        The Sixth Extinction
      </ExternalLink>
      . I've also started reading a LOT of scientific papers related to
      paleoclimatology.
    </P>
    <H3>Games...</H3>
    <List>
      <List.Item>
        <ExternalLink to="https://luigismansion.nintendo.com">
          Luigi's Mansion 3
        </ExternalLink>
      </List.Item>
      <List.Item>
        <ExternalLink to="https://en.wikipedia.org/wiki/Pillars_of_Eternity">
          Pillars of Eternity
        </ExternalLink>
      </List.Item>
      <List.Item>
        <ExternalLink to="https://store.steampowered.com/app/221380/Age_of_Empires_II_2013/">
          Age of Empires II (HD)
        </ExternalLink>
      </List.Item>
    </List>
  </Layout>
);

export default Now;
