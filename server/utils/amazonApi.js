const axios = require('axios');

const amazonAssociateTag = process.env.AMAZON_ASSOCIATE_TAG;

const getProductDetails = async (asin) => {
  try {
    const response = await axios.get(`https://product-advertising-api.p.rapidapi.com/v1/item`, {
      params: {
        asin: asin,
        access_key: process.env.AMAZON_ACCESS_KEY,
        associate_tag: amazonAssociateTag
      },
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": "product-advertising-api.p.rapidapi.com"
      }
    });
    return response.data;
  } catch (error) {
    console.error('Amazon API Error:', error);
    throw error;
  }
};

module.exports = { getProductDetails };
