const path = require('path');

exports.createPages = async ({graphql, actions: { createPage }}) => {
  const categoryTemplate = path.resolve('./src/templates/CategoryPage.js')
  const {
    data: {
      cms: {categories, collections, products}
    }
  } = await graphql(`
    {
      cms {
        categories {
          slug
        }
        collections {
          slug
        }
        products {
          id
        }
      }
    }
  `)
  if(categories){
    categories.forEach(({ slug }) => createPage({
      path: `/categories/${slug}`,
      component: categoryTemplate,
      context: { slug }
    }));
  }
}