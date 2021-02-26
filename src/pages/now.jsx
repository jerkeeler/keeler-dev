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
      title="Now"
      description="Jeremy's now page. What he is up to NOW. Music he's listening to, what he's doing, what books he's reading."
    />
    <H1>Now</H1>
    <P>
      What is a{' '}
      <ExternalLink to="https://nownownow.com/">now page</ExternalLink>?
    </P>
    <H3>Work...</H3>
    <P>
      Living in Ann Arbor and pursuing a Ph.D. in paleoclimatology from the{' '}
      <ExternalLink to="https://umich.edu">University of Michigan</ExternalLink>
      . I'm currently exploring how orbital parameters affect oxygen isotope
      distributions during the{' '}
      <ExternalLink to="https://en.wikipedia.org/wiki/Paleocene%E2%80%93Eocene_Thermal_Maximum">
        Paleocene-Eocene Thermal Maximum
      </ExternalLink>
      .
    </P>
    <H3>Music...</H3>
    <List>
      <List.Item>
        <ExternalLink to="https://open.spotify.com/artist/7pXu47GoqSYRajmBCjxdD6?si=MJr6zgiHQI2HD4Idst3D7A">
          vulfpeck
        </ExternalLink>
      </List.Item>
      <List.Item>
        <ExternalLink to="https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM?si=jTJBGS2zRuKvxIIyFPhVFQ">
          lofi hip hop
        </ExternalLink>{' '}
      </List.Item>
    </List>
    <H3>Reading...</H3>
    <P>
      I'm currently reading{' '}
      <ExternalLink to="https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316117/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1614355431&sr=8-1">
        Sapians: A Brief History of Humankind
      </ExternalLink>
      ,{' '}
      <ExternalLink to="https://en.wikipedia.org/wiki/Dune_%28novel%29">
        Dune
      </ExternalLink>
      , and{' '}
      <ExternalLink to="https://www.amazon.com/Sixth-Extinction-Unnatural-History/dp/0805092994">
        The Sixth Extinction
      </ExternalLink>
      . I've also started reading a <strong>lot</strong> of scientific papers
      related to paleoclimatology.
    </P>
    <H3>Games...</H3>
    <List>
      <List.Item>
        <ExternalLink to="https://www.elderscrollsonline.com/en-us/home">
          Elder Scrolls Online
        </ExternalLink>
      </List.Item>
      <List.Item>
        <ExternalLink to="https://www.nintendo.com/games/detail/stardew-valley-switch/">
          Stardew Valley (Switch)
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
