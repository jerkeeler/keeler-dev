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

async function createPostPages(graphql, createPage, reporter) {
  const postTemplate = path.resolve(`src/templates/Post/index.js`);

  const result = await graphql(`
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
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
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

  return Promise.resolve();
}

async function createTagPages(graphql, createPage, reporter) {
  const tagTemplate = path.resolve('src/templates/Tag/index.js');

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            fields {
              url
            }
            frontmatter {
              draft
              date
              tags
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return Promise.reject(result.errors);
  }

  const tags = new Set();
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    node.frontmatter.tags.forEach(tag => tags.add(tag));
  });
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag}`,
      component: tagTemplate,
      context: {
        tag: tag,
      },
    });
  });

  return Promise.resolve();
}

async function createPages({ actions, graphql, reporter}) {
  const { createPage } = actions;
  await createPostPages(graphql, createPage, reporter);
  await createTagPages(graphql, createPage, reporter);
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
