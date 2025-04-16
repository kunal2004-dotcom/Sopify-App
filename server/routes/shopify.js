const express = require('express');
const router = express.Router();
const shopifyApi = require('../utils/shopifyApi');

router.post('/products', async (req, res) => {
  try {
    const productData = req.body;
    const createdProduct = await shopifyApi.createProduct(productData);
    res.json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create product in Shopify' });
  }
});

module.exports = router;
