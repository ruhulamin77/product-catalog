'use client';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';

export default function Header() {
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div
        className="text-xl font-bold text-blue-600 cursor-pointer"
        onClick={() => router.push('/')}
      >
        Product Catalog
      </div>
      <div>
        {token ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => router.push('/login')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}
