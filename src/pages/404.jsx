import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import P from '../components/typography/P';
import H1 from '../components/typography/H1';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <H1>
      404: Not found{' '}
      <span role="img" aria-label="sad face">
        😞
      </span>
    </H1>
    <P>Sadly, this page does not exist...</P>
  </Layout>
);

export default NotFoundPage;
