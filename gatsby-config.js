module.exports = {
  siteMetadata: {
    title: `Jeremy Keeler`,
    description: `The life, thoughts, ramblings, musings, and photos of Jeremy Keeler. Paleoclimatologist, software engineer, and nature enthusist.`,
    author: `@jerkeeler`,
    siteUrl: `https://keeler.dev`,
  },
  plugins: [
    // ====================
    // SITE METADATA
    // ====================
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `keeler.dev`,
        short_name: `keeler.dev`,
        start_url: `/`,
        background_color: `#1b96b4`,
        theme_color: `#24d1f8`,
        display: `minimal-ui`,
        icon: `src/images/minimal_j.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-108069665-3',
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/contact/success`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        sitemap: `https://timkeeler.net/sitemap.xml`,
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: ['/contact/success'],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    // =====================
    // STYLING
    // =====================
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({ stage: 0 }),
          require('tailwindcss'),
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true,
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },

    // =====================
    // CONTENT
    // =====================
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `markdown`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              showCaptions: ['title'],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/posts/${edge.node.frontmatter.path}`,
                  guid: edge.node.frontmatter.path,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { frontmatter: { draft: { ne: true } } }
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        title
                        date
                        path
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'keeler.dev RSS feed',
          },
        ],
      },
    },
  ],
};
