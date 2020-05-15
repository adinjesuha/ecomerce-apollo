const { gql } = require('apollo-server-lambda');
const { GraphQLDataSource } = require('apollo-datasource-graphql');

const PRODUCTS_DATA = gql`
  query {
    products {
      id
      sku
      name
      price
      currency
      image
    }
  }
`;

class GraphCMSAPI extends GraphQLDataSource {
  baseURL = process.env.GATSBY_GRAPHCMS_API;
  async getProducts() {
    try{
      const response = await this.query(PRODUCTS_DATA);
      return response.data.products;
    }catch(error){
      console.error(error)
    }
  }
}

module.exports = GraphCMSAPI;