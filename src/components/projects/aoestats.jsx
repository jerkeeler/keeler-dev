import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import H2 from '../typography/H2';
import P from '../typography/P';
import ExternalLink from '../typography/ExternalLink';

const Aoestats = () => (
  <article>
    <H2>
      <ExternalLink to="https://aoestats.io">aoestats</ExternalLink>
    </H2>

    <P>
      aoestats is a website I created that displays the win/play rates of
      civilizations in the Age of Empires II competitive ladders. One can view
      civ vs civ detailed analysis, filter by certain ELO ranges, search for
      civilizations, and view average game values compared to game time. Match
      info is scraped from{' '}
      <ExternalLink to="https://www.voobly.com/">Voobly</ExternalLink> and is
      processed on my server every 3 hours.
    </P>

    <P>
      The backend code is written in python and uses the{' '}
      <ExternalLink to="https://www.djangoproject.com/">
        Django framework
      </ExternalLink>{' '}
      for modeling, db access, and serving up html. The frontend code is written
      in{' '}
      <ExternalLink to="https://www.typescriptlang.org/">
        TypeScript
      </ExternalLink>
      . The initial version was written in one weekend, with minor improvements
      being added every other weekend or so. The current application has
      downloaded and analyzed over 250,000 games.
    </P>

    <StaticQuery
      query={graphql`
        query {
          image: file(relativePath: { eq: "aoestats.jpg" }) {
            childImageSharp {
              fluid(maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => (
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="Screenshot of aoestats.io"
        />
      )}
    />
  </article>
);

export default Aoestats;
