'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/';
  const login = useAuthStore((state) => state.login);
  const token = useAuthStore((state) => state.token);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'test@test.com' && password === '123456') {
      login('mock-token');
      document.cookie = 'token=mock-token; path=/';
      router.push(redirectTo);
    } else {
      alert('Invalid credentials');
    }
  };

  console.log({ token });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 to-blue-200">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <input
          type="email"
          className="w-full p-3 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-3 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Log In
        </button>
      </form>
    </div>
  );
}
