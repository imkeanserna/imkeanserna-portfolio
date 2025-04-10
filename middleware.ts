import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('/me/') ||
    pathname.includes('.') // Files like favicon.ico
  ) {
    return NextResponse.next();
  }

  // Valid routes here
  const validRoutes = ['/'];

  // If the path doesn't exist in our valid routes, redirect to the homepage
  if (!validRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Define paths middleware will run on
export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
