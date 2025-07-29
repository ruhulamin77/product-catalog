'use client';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get('redirect') || '/';

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      useAuthStore.getState().checkAuth();
      router.push(redirectPath);
    } else {
      alert('Invalid credentials! try test@test.com / 123456');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="text-sm text-gray-600">Test Email: test@test.com</p>
      <p className="text-sm text-gray-600">Test Password: 123456</p>
      <button
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition-colors"
      >
        Login
      </button>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
