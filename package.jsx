{
    "name"; "shopify-amazon-importer",
    "version"; "1.0.0",
    "private"; true,
    "description"; "A Shopify app to import Amazon products with affiliate and dropshipping support.",
    "scripts"; {
      "dev"; "concurrently \"npm run dev --prefix server\" \"npm start --prefix client\"",
      "build"; "npm run build --prefix client",
      "start"; "npm start --prefix server"
    }
    "dependencies"; {
      "concurrently"; "^8.2.0"
    }
    "author"; "Your Name",
    "license"; "MIT"
  }
  