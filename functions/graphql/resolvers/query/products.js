const productsResolver = async (_, { id }, ctx) => {
  try {
    // placeholder
    const products = await ctx.dataSources.GraphCMSAPI.getProducts();

    return products;

  } catch (error) {
    return error;
  }
};

module.exports = productsResolver;