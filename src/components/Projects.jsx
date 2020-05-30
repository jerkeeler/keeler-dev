import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import ExternalLink from './typography/ExternalLink';
import H2 from './typography/H2';
import P from './typography/P';

const ProjectLogo = ({ img }) => (
  <div>
    <Img
      fluid={img.childImageSharp.fluid}
      alt="project logo"
      className="w-12 h-12 mr-6"
    />
  </div>
);

const ProjectDescription = ({ children }) => <div>{children}</div>;

const Project = ({ children }) => (
  <div className="flex flex-row shadow border border-gray-300 p-3 rounded">
    {children}
  </div>
);

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      aoestats: file(relativePath: { eq: "aoestats_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <H2>Projects</H2>
      <Project>
        <ProjectLogo img={data.aoestats} />
        <ProjectDescription>
          <P>
            <strong>
              <ExternalLink to="https://aoestats.io">aoestats.io</ExternalLink>
            </strong>
          </P>
          <P>
            aoestats.io is a website I created that periodically, and
            automatically, calculates statistics for the{' '}
            <ExternalLink to="https://www.ageofempires.com/">
              Age of Empires II
            </ExternalLink>{' '}
            video game. The backend and stats code is written with Python and
            Django. Stats are calculated each day via a script scheduled with
            cron. The frontend is written with React and Gatsby and is updated
            daily after ths stats script is run. The site is hosted on Netlify.
          </P>
        </ProjectDescription>
      </Project>
    </>
  );
};

export default Projects;
