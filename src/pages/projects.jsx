import React from 'react';

import Layout from '../components/Layout';
import H1 from '../components/typography/H1';
import Aoestats from '../components/projects/aoestats';
import SEO from '../components/SEO';

const Projects = () => (
  <Layout>
    <SEO
      title="projects"
      description="Jeremy's projects. List and description of Jeremy's projects. His approach, links to them, and other miscellaneous information about them."
    />

    <H1>Projects</H1>
    <Aoestats />
  </Layout>
);

export default Projects;
