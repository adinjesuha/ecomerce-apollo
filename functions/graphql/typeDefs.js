const { gql } = require('apollo-server-lambda');

const typeDefs = gql`

  type Query {
    products: [Product!]!
  }

  type Product {
    id: ID!
    sku: String!
    name: String!
    price: Int!
    image: String!
    currency: String!
  }

`;

module.exports = typeDefs;