import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Imported Products</h2>
      {products.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Product Title</th>
              <th className="border border-gray-300 p-2">Amazon URL</th>
              <th className="border border-gray-300 p-2">Shopify URL</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border border-gray-300 p-2">{product.title}</td>
                <td className="border border-gray-300 p-2">{product.amazonUrl}</td>
                <td className="border border-gray-300 p-2"></td>
                <td className="border border-gray-300 p-2">Imported</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products imported yet.</p>
      )}
    </div>
  );
}

export default ProductList;
