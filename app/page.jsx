'use client';
import { useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch products. Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    const filteredResults = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filteredResults);
  };

  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading products...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-600 text-xl">
        Failed to load products: {error}
      </div>
    );
  }

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <SearchBar onSearch={handleSearch} />
      {filtered.length === 0 ? (
        <p className="text-center mt-6 text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mx-auto mb-4"
              />
              <h2 className="font-semibold text-lg line-clamp-2 mb-2">
                {product.title}
              </h2>
              <p className="text-blue-600 font-bold mb-4">${product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
