import React, { useState } from 'react';

function ImportForm({ onProductImported }) {
  const [amazonUrl, setAmazonUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const asin = extractAsin(amazonUrl);
    if (asin) {
      const response = await fetch(`/amazon/product?asin=${asin}`);
      const data = await response.json();
      onProductImported(data); // Call the callback function
    } else {
      alert('Invalid Amazon URL');
    }
  };

  function extractAsin(url) {
    return url.match(/dp\/([A-Z0-9]{10})/)?.[1];
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <label htmlFor="amazon-url" className="block text-gray-600 mb-2">Amazon Product URL:</label>
      <input
        type="text"
        id="amazon-url"
        placeholder="Enter Amazon Product URL"
        value={amazonUrl}
        onChange={(e) => setAmazonUrl(e.target.value)}
        className="border rounded p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white rounded p-2 ml-2 hover:bg-blue-600">Import</button>
    </form>
  );
}

export default ImportForm;
