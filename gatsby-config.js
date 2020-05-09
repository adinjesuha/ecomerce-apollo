// gatsby-config.js
module.exports = {
  siteMetadata:{
    title: 'Ecommerce with Apollo'
  },
  plugins: [{
    resolve: "gatsby-plugin-chakra-ui",
    options: {
      isUsingColorMode: false,
    }
  }],
};