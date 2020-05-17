// gatsby-config.js
require(`dotenv`).config();

module.exports = {
  siteMetadata:{
    title: "Ecommerce with Apollo",
    description: "Beautiful JAMStack ecommerce template with serverless functions",
    siteUrl: "https://ecommerce-apollo-graphcms.netlify.app",
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