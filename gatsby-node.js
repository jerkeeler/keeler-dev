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

  const postTemplate = path.resolve(`src/components/blog/PostTemplate/index.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              url
            }
            frontmatter {
              draft
              date
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
      if ((CONTEXT === 'production' && !node.frontmatter.draft) ||
           CONTEXT === 'development') {
        createPage({
          path: node.fields.url,
          component: postTemplate,
          context: {},
        });
      }
    });
  });
}

exports.createPages = createPages;

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const { createNodeField } = actions;
    const url = '/posts/' + node.frontmatter.path;
    createNodeField({
      node,
      name: `url`,
      value: url,
    })
  }
};
