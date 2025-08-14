import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('accessToken');
    const { pathname } = request.nextUrl;

    if (pathname === '/forohub/' || pathname === '/forohub') {
        return NextResponse.next();
    }

    const isProtected = pathname.includes('/dashboard');

    if (isProtected && !token) {
        const loginUrl = new URL('/forohub/', request.url);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}
