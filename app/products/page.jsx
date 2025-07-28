import React from 'react';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function AllProductsPage() {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((p) => (
        <div key={p.id} className="border p-4">
          <img src={p.image} className="h-32 object-contain mx-auto" />
          <h2 className="font-semibold">{p.title}</h2>
          <p>${p.price}</p>
          <a href={`/products/${p.id}`}>
            <button className="bg-blue-500 text-white px-4 py-1 mt-2">
              View Details
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}
