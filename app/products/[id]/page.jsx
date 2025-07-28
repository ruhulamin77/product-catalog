import { notFound } from 'next/navigation';

export const dynamicParams = true; // fallback data if dynamic id not found in the static pages
export const revalidate = 60;

// generate static params for all the products
export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return products.map((p) => ({ id: p.id.toString() }));
}

export default async function ProductDetailsPage({ params }) {
  let product;
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    product = await res.json();
  } catch (error) {
    notFound();
  }

  return (
    <div className="p-8">
      <img src={product.image} className="h-48 mx-auto" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="my-4">{product.description}</p>
      <p className="font-semibold">${product.price}</p>
      <a href="/products">
        <button className="mt-4 px-4 py-2 bg-gray-300">Back to Products</button>
      </a>
    </div>
  );
}
