import { cookies } from 'next/headers';

export async function POST() {
  const { email, password } = await request.json();

  const cookieStore = await cookies();
  cookieStore.set('token', 'mock-auth-token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60, // 1 hour
  });
}
