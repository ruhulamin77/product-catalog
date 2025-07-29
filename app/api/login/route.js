import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();

  // Dummy login
  if (email === 'test@test.com' && password === '123456') {
    const fakeToken = 'FAKE_JWT_TOKEN';

    const response = NextResponse.json({ success: true });
    response.cookies.set('token', fakeToken, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60, // 1 hour
    });

    return response;
  }

  return NextResponse.json(
    { success: false, message: 'Invalid credentials' },
    { status: 401 }
  );
}
