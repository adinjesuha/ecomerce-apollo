const stripe = require('stripe')(process.env.STRIPE_API_SECRET);
const validateCartItems = require('use-shopping-cart/src/serverUtil').validateCartItems;
const inventory = require('./data/products.json');

exports.handler = async (event) => {
  try {
    const productJSON = JSON.parse(event.body)
    const line_items = validateCartItems(inventory, productJSON);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US', 'HN'],
      },
      success_url: 'https://ecommerce-apollo-graphcms.netlify.app/thanks',
      cancel_url: 'https://ecommerce-apollo-graphcms.netlify.app',
      line_items: [
        ...line_items,
        {
          name: 'Shipping and Handling',
          description: 'Flat rate shipping anywhere in the world.',
          images: [],
          amount: 350,
          currency: 'USD',
          quantity: 1,
        },
      ],
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    }
  } catch (error) {
    console.error(error)
  }
}
