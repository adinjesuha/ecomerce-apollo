const products = require('./query/products');

const resolvers = {
  Query: {
    products,
  }
};

module.exports = resolvers;