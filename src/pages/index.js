import React from 'react'

import Layout from '../components/homepage/layout';
import Link from '../components/homepage/link';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Link to="/blog/">Blog</Link>
    <Link to="/projects/">Projects</Link>
    <Link to="/about/">About</Link>
    <Link to="/experiments/">Experiments</Link>
  </Layout>
)

export default IndexPage
