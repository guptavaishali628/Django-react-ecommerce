import {useEffect, useState} from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/products') // Adjust the URL to match your Django backend endpoint
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="container mx-auto px-4">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;