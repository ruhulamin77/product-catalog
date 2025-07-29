'use client';
import { useAuthStore } from '@/store/authStore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProductDetailsPage({ params }) {
  const { id } = params;
  const token = useAuthStore((state) => state.token);
  const router = useRouter();
  const [product, setProduct] = useState(null);

  // Redirect if not logged in
  useEffect(() => {
    if (!token) {
      router.push(`/login?redirect=/products/${id}`);
    }
  }, [token, id]);

  // Fetch product
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error('Product not found!');
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }

    if (token) fetchProduct();
  }, [id, token]);

  if (!token) return null; // Prevent flash

  if (!product) return <div className="p-8">Loading product...</div>;

  return (
    <div className="p-8">
      <Image
        src={product.image}
        className="max-w-64 mx-auto"
        height={400}
        width={300}
        alt={product.title}
      />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="my-4">{product.description}</p>
      <p className="font-semibold">${product.price}</p>
      <Link href="/">
        <button className="mt-4 px-4 py-2 bg-gray-300">Back to Home</button>
      </Link>
    </div>
  );
}
