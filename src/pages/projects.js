import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Aoestats from '../components/projects/aoestats';

const Projects = () => (
  <Layout>
    <SEO title="projects" />

    <h1>Projects</h1>

    <Aoestats />
  </Layout>
);

export default Projects;
