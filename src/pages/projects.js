import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Aoestats from '../components/projects/aoestats';

const Projects = () => (
  <Layout>
    <SEO title="projects" description="Jeremy's projects. List and description of Jeremy's projects. His approach, links to them, and other miscellaneous information about them." />

    <h1>Projects</h1>

    <Aoestats />
  </Layout>
);

export default Projects;
