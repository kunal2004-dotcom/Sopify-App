const express = require('express');
const router = express.Router();
const amazonApi = require('../utils/amazonApi');

router.get('/product', async (req, res) => {
  try {
    const { asin } = req.query;
    const productData = await amazonApi.getProductDetails(asin);
    res.json(productData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch product from Amazon' });
  }
});

module.exports = router;
