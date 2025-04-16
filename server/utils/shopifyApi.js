const Shopify = require('shopify-api-node');

const shopify = new Shopify({
  shopName: process.env.SHOPIFY_SHOP_NAME,
  accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
});

const createProduct = async (productData) => {
  try {
    const product = await shopify.product.create(productData);
    return product;
  } catch (error) {
    console.error('Shopify API Error:', error);
    throw error;
  }
};

module.exports = { createProduct };
