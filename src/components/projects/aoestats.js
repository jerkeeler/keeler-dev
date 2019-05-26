import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Aoestats = () => (
  <article>
    <h2>
      <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://aoestats.io"
        >
        aoestats
        </a>
    </h2>

    <p>aoestats is a website I created that displays the win/play rates of civilizations in the Age of Empires II competitive ladders. One can view civ vs civ detailed analysis, filter by certain ELO ranges, search for civilizations, and view average game values compared to game time. Match info is scraped from <a rel="noopener noreferrer"
          target="_blank" href="https://www.voobly.com/">Voobly</a> and is processed on my server every 3 hours.</p>

    <p>The backend code is written in python and uses the Django framework for modeling, db access, and serving up html. The frontend code is written in TypeScript. The initial version was written in one weekend, with minor improvements being added every other weekend or so. The current application has downloaded and analyzed over 250,000 games.</p>

    <StaticQuery
      query={graphql`
        query {
          image: file(relativePath: { eq: "aoestats.png" }) {
            childImageSharp {
              fluid(maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="Screenshot of aoestats.io"
        />
      )}
    />
  </article>
);

export default Aoestats;
