import React, { useState } from 'react';
import ImportForm from './components/ImportForm';
import ProductList from './components/ProductList';
import Settings from './components/Settings';

function App() {
  const [importedProducts, setImportedProducts] = useState([]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Amazon Product Importer</h1>

      <ImportForm onProductImported={product => setImportedProducts([...importedProducts, product])} />
      <Settings />
      <ProductList products={importedProducts} />
    </div>
  );
}

export default App;
