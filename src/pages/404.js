import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: NOT FOUND</h1>
    <p>
      This page doesn't exist...{' '}
      <span role="img" aria-label="warning sign">
        😞
      </span>
    </p>
    <p>Before you viewed it, the page neither existed nor didn't exist.</p>
  </Layout>
);

export default NotFoundPage;
