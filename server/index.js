const express = require('express');
const cors = require('cors');
const amazonRoutes = require('./routes/amazon');
const shopifyRoutes = require('./routes/shopify');
const importRoutes = require('./routes/import');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://shopify-app-client.onrender.com'
    : 'http://localhost:3000'
}));

app.use(express.json());
app.use('/amazon', amazonRoutes);
app.use('/shopify', shopifyRoutes);
app.use('/import', importRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
