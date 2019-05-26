/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require('dotenv').config();
const path = require('path');

const {
  CONTEXT
} = process.env;

function createPages({ actions, graphql }) {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/components/blog/post-template.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              draft
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if ((CONTEXT == 'production' && !node.frontmatter.draft) ||
           CONTEXT == 'development') {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
          context: {},
        });
      }
    });
  });
}

exports.createPages = createPages;
