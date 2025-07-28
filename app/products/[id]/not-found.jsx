import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <p className="text-xl mt-2">Product Not Found</p>
      <Link href="/" className="text-blue-500 mt-4 underline">
        Go to Home
      </Link>
    </div>
  );
}
