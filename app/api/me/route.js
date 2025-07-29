import { NextResponse } from 'next/server';

// Check user logged in or not
export async function GET(request) {
  const token = request.cookies.get('token')?.value;
  if (token) {
    return NextResponse.json({ loggedIn: true });
  }
  return NextResponse.json({ loggedIn: false }, { status: 401 });
}
