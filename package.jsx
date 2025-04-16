{
  "name": "shopify-amazon-importer",
  "version": "1.0.0",
  "private": true,
  "description": "A Shopify app to import Amazon products with affiliate and dropshipping support.",
  "scripts": {
    "dev": "concurrently \"npm run dev --prefix server\" \"npm start --prefix client\"",
    "build": "cd client && npm install && npm run build",
    "start": "cd server && npm install && npm start",
    "postinstall": "cd client && npm install && cd ../server && npm install"
  },
  "dependencies": {
    "concurrently": "^8.2.0"
  },
  "author": "Your Name",
  "license": "MIT",
  "engines": {
    "node": ">=16.0.0"
  }
}
