// gatsby-config.js
require(`dotenv`).config();

module.exports = {
  siteMetadata:{
    title: 'Ecommerce with Apollo'
  },
  plugins: [
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isUsingColorMode: false,
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: `GraphCMS`,
        fieldName: `cms`,
        url: process.env.GATSBY_GRAPHCMS_API,
      },
    },
  ],
};